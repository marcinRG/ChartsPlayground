import * as React from 'react';
import {DescriptionSectionComponent} from '../../PageElements/DescriptionSection/DescriptionSection.component';
import {ChartsListComponent} from '../../PageElements/ChartsList/ChartsList.component';
import {ExplanationSectionComponent} from '../../PageElements/HowDoesItWork/ExplanationSection.component';
import {SelectedChartsComponent} from '../../PageElements/SelectedCharts/SelectedCharts.component';
import {InTheSpotlightComponent} from '../../PageElements/InTheSpotlight/InTheSpotlight.component';


export function HomePage(props: any) {
    return (
        <React.Fragment>
            <DescriptionSectionComponent/>
            <ChartsListComponent/>
            <ExplanationSectionComponent/>
            <SelectedChartsComponent/>
            <InTheSpotlightComponent/>
        </React.Fragment>);
}
