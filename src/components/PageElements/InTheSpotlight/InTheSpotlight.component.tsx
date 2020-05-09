import * as React from 'react';
import './InTheSpotlight.component.scss';
import {OtherContext} from '../../../appContext/other.context';
import {RandomChartComponent} from './RandomChart.component';
import {getCharts} from '../../../utils/other.utils';

export function InTheSpotlightComponent() {
    return (
        <section className="in-the-spotlight">
            <div className="content-wrapper">
                <h2 className="section-title">In the spotlight</h2>
                <OtherContext.Consumer>
                    {context =>
                        <RandomChartComponent charts={getCharts(context.state.chartList)} index={context.state.spotlightedChart}/>
                    }
                </OtherContext.Consumer>

            </div>
        </section>
    );
}
