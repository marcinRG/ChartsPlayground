import * as React from 'react';
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

export function ChartsDetails(props: any) {
    const id = parseInt(props.match.params.chartId, 10);
    return (
        <div>
            <h1>Chart&apos;s details</h1>
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
        </div>);
}
