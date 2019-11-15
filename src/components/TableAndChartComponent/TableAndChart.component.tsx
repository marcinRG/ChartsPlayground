import * as React from 'react';
import './TableAndChart.component.scss';
import {TableComponent} from '../TableComponents/Table.component';
import {BarChartComponent} from '../ChartComponents/BarChart/BarChart.component';
import {PointsChartComponent} from '../ChartComponents/PointsChart/PointsChart.component.';
import {LineChartComponent} from '../ChartComponents/LineChart/LineChart.component';
import {AreaChartComponent} from '../ChartComponents/AreaChart/AreaChart.component';
import {PieChartComponent} from '../ChartComponents/PieChart/PieChart.component';

export function TableAndChartComponent(props: any) {
    return (
        <div>
            <div className="table-chart-component">
                <TableComponent/>
                <BarChartComponent/>
            </div>

            <div className="table-chart-component">
                <TableComponent/>
                <PointsChartComponent/>
            </div>
            <div className="table-chart-component">
                <TableComponent/>
                <LineChartComponent/>
            </div>
            <div className="table-chart-component">
                <TableComponent/>
                <AreaChartComponent/>
            </div>
            <div className="table-chart-component">
                <TableComponent/>
                <PieChartComponent/>
            </div>
        </div>
    );
}
