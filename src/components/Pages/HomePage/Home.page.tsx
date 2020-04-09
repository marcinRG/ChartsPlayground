import * as React from 'react';
import {DescriptionSectionComponent} from '../../PageElements/DescriptionSection/DescriptionSection.component';
import {ChartsListComponent} from '../../PageElements/ChartsList/ChartsList.component';
import {ExplanationSectionComponent} from '../../PageElements/HowDoesItWork/ExplanationSection.component';
import {SelectedChartsComponent} from '../../PageElements/SelectedCharts/SelectedCharts.component';
import {InTheSpotlightComponent} from '../../PageElements/InTheSpotlight/InTheSpotlight.component';
import {TableAndChartComponent} from '../../TableAndChartComponent/TableAndChart.component';
import {ExampleConsumer} from '../../../appContext/Example.Consumer';

export function HomePage(props: any) {
    return (
        <React.Fragment>
            <div>
                <TableAndChartComponent/>
                <ExampleConsumer></ExampleConsumer>
            </div>
{/*
            <DescriptionSectionComponent/>
            <ChartsListComponent/>
            <ExplanationSectionComponent/>
            <SelectedChartsComponent/>
            <InTheSpotlightComponent/>
*/}
        </React.Fragment>);
}
