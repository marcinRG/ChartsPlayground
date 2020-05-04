import * as React from 'react';
import {Component} from 'react';
import {OtherContext} from './other.context';
// @ts-ignore
import * as areaimg from '../../src/images/area-chart.png';
// @ts-ignore
import * as areabig from '../../src/images/area-chart-big.png';
//-------------------------------------------
// @ts-ignore
import * as barimg from '../../src/images/bar-chart.png';
// @ts-ignore
import * as barbig from '../../src/images/bar-chart-big.png';
//-------------------------------------------
// @ts-ignore
import * as pointsimg from '../../src/images/points-chart.png';
// @ts-ignore
import * as pointsBig from '../../src/images/point-chart-big.png';
//----------------------------------------------
// @ts-ignore
import * as linepointimg from '../../src/images/line-point-chart.png';
// @ts-ignore
import * as linepointBig from '../../src/images/line-chart-big.png';

//----------------------------------------------
// @ts-ignore
import * as pieimg from '../../src/images/pie-chart.png';
// @ts-ignore
import * as pieBig from '../../src/images/pie-chart-big.png';

// @ts-ignore
import * as imgComputer from '../../src/images/computer.png';


import {ChartTypes} from '../enums/ChartTypes';
import {HomePageSections} from '../enums/HomePageSections';
import {PageTitles} from '../enums/PageTitles';

export interface IChartDescription {
    iD: number;
    name: string;
    image: string;
    imageBig: string;
    description: string
}

export interface ISearchFormProperties {
    showTextInput: boolean;
    searchText: string;
    goToSearchPage: boolean;
}


interface ITitileDescription {
    title: string;
    description: string;
}

interface  IPageSection  extends ITitileDescription{
    collection?: ITitileDescription[];
    image?: {
        title: string;
        imagePath: string;
    }
}

interface IHomePageContent {
    [key:string]: IPageSection;
}


export interface IOtherProviderState {
    splashScreenVisible: boolean;
    chartList: IChartDescription[];
    selectedCharts: number[];
    currentSelectedChart: number;
    spotlightedChart: number;
    searchFormProperties: ISearchFormProperties;
    homePageContent: IHomePageContent;
}

const charts: IChartDescription[] = [
    {
        iD: ChartTypes.BAR_CHART,
        name: 'bar chart',
        image: barimg,
        imageBig: barbig,
        description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
    },
    {
        iD: ChartTypes.LINE_CHART,
        name: 'line chart',
        image: linepointimg,
        imageBig: linepointBig,
        description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
    },
    {
        iD: ChartTypes.PIE_CHART,
        name: 'pie chart',
        image: pieimg,
        imageBig: pieBig,
        description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
    },
    {
        iD: ChartTypes.POINT_CHART,
        name: 'points chart',
        image: pointsimg,
        imageBig: pointsBig,
        description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
    },
    {
        iD: ChartTypes.AREA_CHART,
        name: 'area chart',
        image: areaimg,
        imageBig: areabig,
        description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
    }
];

// const homePageStaticContent: Map<string,IPageSection> = new Map();

const homePageStaticContent: IHomePageContent = {
    [HomePageSections.EXPLANATION_SECTION]: {
        title: 'What\'s this?',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aut
                        commodi
                        cum
                        cupiditate dolor
                        eius error eum expedita facere illum mollitia nemo odit perspiciatis porro, quos repudiandae
                        velit veritatis vero?`,
      image: {
            imagePath: imgComputer,
            title: 'someone browsing web on a tablet'
      }
    },
    [HomePageSections.DESCRIPTION_SECTION]:{
        title: 'How does it work?',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                        consequuntur
                        corporis doloribus dolorum eos,
                        id incidunt ipsa iure necessitatibus nemo nesciunt nihil quae quod repellendus
                        rerum sunt voluptas voluptatem voluptates!`,
        collection: [
            {
                title: 'Lorem ipsum',
                description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Alias consequuntur corporis doloribus dolorum eos`
            },
            {
                title: 'Lorem ipsum',
                description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Alias consequuntur corporis doloribus dolorum eos`
            },
            {
                title: 'Lorem ipsum',
                description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Alias consequuntur corporis doloribus dolorum eos`
            },
        ]
    }
}

export class OtherProvider extends Component<any, IOtherProviderState> {
    public state: IOtherProviderState;

    constructor(props: any) {
        super(props);
        this.state = {
            splashScreenVisible: false,
            chartList: charts,
            spotlightedChart: randomInt(0, charts.length),
            selectedCharts: [ChartTypes.AREA_CHART, ChartTypes.PIE_CHART, ChartTypes.BAR_CHART],
            currentSelectedChart: 0,
            searchFormProperties: {
                showTextInput: false,
                searchText: '',
                goToSearchPage: false
            },
            homePageContent: homePageStaticContent
        };
        this.changeSelectedChart = this.changeSelectedChart.bind(this);
        this.toggleSearchFormTextInput = this.toggleSearchFormTextInput.bind(this);
        this.changeSearchFormText = this.changeSearchFormText.bind(this);
        this.setGoToSearchPage = this.setGoToSearchPage.bind(this);
        this.toggleSplashScreenVisibility = this.toggleSplashScreenVisibility.bind(this);
    }

    toggleSplashScreenVisibility() {
        this.setState({
            splashScreenVisible: !this.state.splashScreenVisible
        });
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
                        toggleSplashScreenVisibility: this.toggleSplashScreenVisibility
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

function randomInt(min: number, max: number) {
    return min + Math.floor((max - min) * Math.random());
}

function findInCharts(text:string): any[] {
    return [];
}

function findInStaticContent(text: string, staticContent: any): any[] {
    const pageName = PageTitles.HOME_PAGE;
    let searchResults: any[] = [];
    return searchResults;
}
