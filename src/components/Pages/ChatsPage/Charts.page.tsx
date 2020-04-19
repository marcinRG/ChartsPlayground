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

export function ChartsPage(props: any) {
    return (
        <div>
            <h1>Charts</h1>
            <DataProviderBarChart>
                <TableAndBarChartComponent></TableAndBarChartComponent>
            </DataProviderBarChart>
            <DataProviderLineChart>
                <TableAndLineChartComponent></TableAndLineChartComponent>
            </DataProviderLineChart>
            <DataProviderPieChart>
                <TableAndPieChartComponent></TableAndPieChartComponent>
            </DataProviderPieChart>
            <DataProviderPointChart>
                <TableAndPointsChartComponent></TableAndPointsChartComponent>
            </DataProviderPointChart>
            <DataProviderAreaChart>
                <TableAndAreaChartComponent></TableAndAreaChartComponent>
            </DataProviderAreaChart>
        </div>);
}


