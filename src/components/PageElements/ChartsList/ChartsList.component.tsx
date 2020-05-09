import * as React from 'react';
import './ChartsList.component.scss';
import {OtherContext} from '../../../appContext/other.context';
import {Link} from 'react-router-dom';
import {PageTitles} from '../../../enums/PageTitles';
import {IChartDescription} from '../../../data/charts.data';
import {getCharts} from '../../../utils/other.utils';

export function ChartsListComponent() {
    return (
        <OtherContext.Consumer>
            {context =>
                <section className="types-of-charts-list">
                    <h2 className="section-title charts-title">Types of charts</h2>
                    <div className="charts-display">
                        {getCharts(context.state.chartList).map((document: IChartDescription, i: number) =>
                            <div key={i} className="chart-description">
                                <img src={document.image} alt={document.name} className="chart-img"/>
                                <h4 className="chart-title">{document.name}</h4>
                                <p className="chart-text">{document.description}
                                   <Link to={'/' + PageTitles.CHARTS_DETAILS_PAGE + '/' + document.iD}>See more</Link>
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            }
        </OtherContext.Consumer>
    );
}


