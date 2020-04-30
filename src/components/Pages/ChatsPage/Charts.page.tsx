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
import './Charts.page.scss';

export function ChartsPage(props: any) {
    return (
        <div className="charts-page">
            <div className="selected-wrapper">
                <h2 className="section-title">List of all charts</h2>
                <h3 className="chart-subtitle">Bar chart</h3>
                <DataProviderBarChart>
                    <TableAndBarChartComponent></TableAndBarChartComponent>
                </DataProviderBarChart>
                <h3 className="chart-subtitle">Line chart</h3>
                <DataProviderLineChart>
                    <TableAndLineChartComponent></TableAndLineChartComponent>
                </DataProviderLineChart>
                <h3 className="chart-subtitle">Pie chart</h3>
                <DataProviderPieChart>
                    <TableAndPieChartComponent></TableAndPieChartComponent>
                </DataProviderPieChart>
                <h3 className="chart-subtitle">Points chart</h3>
                <DataProviderPointChart>
                    <TableAndPointsChartComponent></TableAndPointsChartComponent>
                </DataProviderPointChart>
                <h3 className="chart-subtitle">Area chart</h3>
                <DataProviderAreaChart>
                    <TableAndAreaChartComponent></TableAndAreaChartComponent>
                </DataProviderAreaChart>
            </div>
        </div>);
}


