import * as React from 'react';
import {DescriptionSectionComponent} from '../../PageElements/DescriptionSection/DescriptionSection.component';
import {ChartsListComponent} from '../../PageElements/ChartsList/ChartsList.component';
import {ExplanationSectionComponent} from '../../PageElements/HowDoesItWork/ExplanationSection.component';
import {SelectedChartsComponent} from '../../PageElements/SelectedCharts/SelectedCharts.component';
import {InTheSpotlightComponent} from '../../PageElements/InTheSpotlight/InTheSpotlight.component';
import {Component} from 'react';

interface IHomePageProps {
    toggleSplashScreenVisibility: () => void;
}

export class HomePage extends  Component<IHomePageProps, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleSplashScreenVisibility();
    }

    componentWillUnmount() {
        this.props.toggleSplashScreenVisibility();
    }

    render() {
        return (
            <React.Fragment>
                <DescriptionSectionComponent/>
                <ChartsListComponent/>
                <ExplanationSectionComponent/>
                <SelectedChartsComponent/>
                <InTheSpotlightComponent/>
            </React.Fragment>);
    }
}
