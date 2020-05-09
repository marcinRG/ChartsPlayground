import * as React from 'react';
import {Component} from 'react';
import {OtherContext} from './other.context';
import {ChartTypes} from '../enums/ChartTypes';
import {charts, IChartDescription, IChartsList} from '../data/charts.data';
import {homePageStaticContent, IHomePageContent, IPageSection} from '../data/staticContent.data';
import {randomInt} from '../utils/other.utils';
import {PageTitles} from '../enums/PageTitles';

export interface ISearchFormProperties {
    showTextInput: boolean;
    searchText: string;
    goToSearchPage: boolean;
}

export interface IOtherProviderState {
    splashScreenVisible: boolean;
    chartList: IChartsList;
    selectedCharts: number[];
    currentSelectedChart: number;
    spotlightedChart: number;
    searchFormProperties: ISearchFormProperties;
    homePageContent: IHomePageContent;
    searchQuery: string;
}

export interface ISearchResult {
    iD?: string;
    key: string;
    page: string[];
    fullText: string;
}


export class OtherProvider extends Component<any, IOtherProviderState> {
    public state: IOtherProviderState;

    constructor(props: any) {
        super(props);
        this.state = {
            splashScreenVisible: false,
            chartList: charts,
            spotlightedChart: randomInt(0, Object.values(charts).length),
            selectedCharts: [ChartTypes.AREA_CHART, ChartTypes.PIE_CHART, ChartTypes.BAR_CHART],
            currentSelectedChart: 0,
            searchFormProperties: {
                showTextInput: false,
                searchText: '',
                goToSearchPage: false
            },
            homePageContent: homePageStaticContent,
            searchQuery: ''
        };
        this.changeSelectedChart = this.changeSelectedChart.bind(this);
        this.toggleSearchFormTextInput = this.toggleSearchFormTextInput.bind(this);
        this.changeSearchFormText = this.changeSearchFormText.bind(this);
        this.setGoToSearchPage = this.setGoToSearchPage.bind(this);
        this.toggleSplashScreenVisibility = this.toggleSplashScreenVisibility.bind(this);
        this.getSearchResults = this.getSearchResults.bind(this);
        this.changeSearchQuery = this.changeSearchQuery.bind(this);
    }

    toggleSplashScreenVisibility() {
        this.setState({
            splashScreenVisible: !this.state.splashScreenVisible
        });
    }

    changeSearchQuery(text: string) {
        this.setState({
            searchQuery: text
        });
    }

    getSearchResults(): ISearchResult[] {
        let results: ISearchResult[] = [];
        results = results.concat(findTextInChartsDescription(this.state.searchQuery, this.state.chartList));
        results = results.concat(findTextInStaticContent(this.state.searchQuery, this.state.homePageContent));
        return results;
    }


    changeSelectedChart(value: number): void {
        let newValue: number;
        if (value === 1) {
            newValue = getNext(this.state.currentSelectedChart, 0, this.state.selectedCharts.length - 1);
        }
        if (value === -1) {
            newValue = getPrevious(this.state.currentSelectedChart, 0, this.state.selectedCharts.length - 1);
        }
        this.setState({
            currentSelectedChart: newValue
        });
    }

    toggleSearchFormTextInput() {
        const newValue: ISearchFormProperties = {...this.state.searchFormProperties};
        newValue.showTextInput = !this.state.searchFormProperties.showTextInput;
        this.setState({
            searchFormProperties: newValue
        });
    }

    changeSearchFormText(text: string) {
        const newValue: ISearchFormProperties = {...this.state.searchFormProperties};
        newValue.searchText = text;
        this.setState({
            searchFormProperties: newValue
        });
    }

    setGoToSearchPage(b: boolean) {
        const newValue: ISearchFormProperties = {...this.state.searchFormProperties};
        newValue.goToSearchPage = b;
        this.setState({
            searchFormProperties: newValue
        });
    }

    render() {
        return (
            <OtherContext.Provider value={
                {
                    state: this.state, actions: {
                        changeSelectedChart: this.changeSelectedChart,
                        toggleSearchFormTextInput: this.toggleSearchFormTextInput,
                        changeSearchFormText: this.changeSearchFormText,
                        setGoToSearchPage: this.setGoToSearchPage,
                        toggleSplashScreenVisibility: this.toggleSplashScreenVisibility,
                        getSearchResults: this.getSearchResults,
                        changeSearchQuery: this.changeSearchQuery
                    }
                }}>
                {this.props.children}
            </OtherContext.Provider>);
    }
}

function getNext(current: number, min: number, max: number): number {
    if (current === max) {
        return min;
    } else {
        return current + 1;
    }
}

function getPrevious(current: number, min: number, max: number): number {
    if (current === min) {
        return max;
    } else {
        return current - 1;
    }
}

function getMainPage(): string[] {
    return [PageTitles.HOME_PAGE];
}

function getPageFromChartsDetails(key: string): string[] {

    switch (key) {
        case 'name': {
            return [PageTitles.HOME_PAGE, PageTitles.CHARTS_DETAILS_PAGE, PageTitles.CHARTS_PAGE];
        }
        case 'shortDescription' : {
            return [PageTitles.HOME_PAGE];
        }
        case 'description' : {
            return [PageTitles.CHARTS_DETAILS_PAGE];
        }
        default: {
            return [];
        }
    }
}

function findTextInChartsDescription(text: string, charts: IChartsList): ISearchResult[] {
    return findTextInCollection(text, charts, getPageFromChartsDetails);
}

function findTextInStaticContent(text: string, staticContent: any): ISearchResult[] {
    return findTextInCollection(text, staticContent, getMainPage);
}

function findTextInCollection(text: string, staticContent: any, func: (txt: string) => string[]): ISearchResult[] {
    let searchResults: ISearchResult[] = [];
    Object.keys(staticContent).forEach((key) => {
        let obj: IPageSection = staticContent[key];
        let foundElements: ISearchResult[] = findInObject(text, obj, func).map((element: ISearchResult) => {
            element.iD = obj.iD;
            return element;
        });
        searchResults = searchResults.concat(foundElements);
    });
    return searchResults;
}

function findInObject(text: string, obj: any, func: (txt: string) => string[]): ISearchResult[] {
    let results: ISearchResult[] = [];
    Object.keys(obj).forEach((key) => {
        if (('string' === typeof (obj[key]))) {
            if (obj[key].includes(text)) {
                results.push(
                    {
                        key,
                        page: func(key),
                        fullText: obj[key]
                    });
            }
        }
        if ((('object' === typeof (obj[key])))) {
            const newObj = obj[key];
            results = results.concat(findInObject(text, newObj, func));
        }
    });
    return results;
}
