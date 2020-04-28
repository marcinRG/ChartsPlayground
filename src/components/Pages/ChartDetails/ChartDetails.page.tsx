import * as React from 'react';
import './ChartDetails.page.scss';

import {TableAndBarChartComponent} from '../../TableAndChartComponent/TableAndBarChart.component';
import {TableAndLineChartComponent} from '../../TableAndChartComponent/TableAndLineChart.component';
import {TableAndPieChartComponent} from '../../TableAndChartComponent/TableAndPieChart.component';
import {TableAndPointsChartComponent} from '../../TableAndChartComponent/TableAndPointsChart.component';
import {TableAndAreaChartComponent} from '../../TableAndChartComponent/TableAndAreaChart.component';
import {
    DataProviderBarChart, DataProviderLineChart, DataProviderPieChart,
    DataProviderPointChart, DataProviderAreaChart
} from '../../../appContext/charts.data.providers';
import {ChartTypes} from '../../../enums/ChartTypes';
import {OtherContext} from '../../../appContext/other.context';
import {IChartDescription} from '../../../appContext/Other.provider';


export function ChartsDetails(props: any) {
    const id = parseInt(props.match.params.chartId, 10);
    return (
        <div className="details-page">
            <div className="selected-wrapper">
                <h2 className="section-title">Chart&apos;s details</h2>
                <OtherContext.Consumer>
                    {context =>
                        <React.Fragment>
                            <div className="small-title">
                                <img src={(getChartDetails(id,context.state.chartList)).image} alt={(getChartDetails(id,context.state.chartList)).name} />
                                <h3>{(getChartDetails(id,context.state.chartList)).name}</h3>
                            </div>

                            {(id === ChartTypes.BAR_CHART) &&
                            <DataProviderBarChart>
                                <TableAndBarChartComponent></TableAndBarChartComponent>
                            </DataProviderBarChart>}

                            {(id === ChartTypes.LINE_CHART) &&
                            <DataProviderLineChart>
                                <TableAndLineChartComponent></TableAndLineChartComponent>
                            </DataProviderLineChart>}

                            {(id === ChartTypes.POINT_CHART) &&
                            <DataProviderPointChart>
                                <TableAndPointsChartComponent></TableAndPointsChartComponent>
                            </DataProviderPointChart>}

                            {(id === ChartTypes.PIE_CHART) &&
                            <DataProviderPieChart>
                                <TableAndPieChartComponent></TableAndPieChartComponent>
                            </DataProviderPieChart>}

                            {(id === ChartTypes.AREA_CHART) &&
                            <DataProviderAreaChart>
                                <TableAndAreaChartComponent></TableAndAreaChartComponent>
                            </DataProviderAreaChart>}

                            <div className="chart-details-info">{(getChartDetails(id,context.state.chartList)).description}</div>
                        </React.Fragment>
                    }
                </OtherContext.Consumer>
            </div>
        </div>);
}

function getChartDetails(id: number, charts: IChartDescription[]): IChartDescription {
    return charts.find( (chart:IChartDescription) => {
        return (chart.iD === id);
    })
}
