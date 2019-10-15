import * as React from 'react';
import './TableAndChart.component.scss';
import {TableComponent} from '../TableComponents/Table.component';
import {ChartComponent} from '../ChartComponents/Chart.component';

export function TableAndChartComponent(props: any) {
    return (
        <div className="table-chart-component">
            <TableComponent/>
            <ChartComponent/>
        </div>
    );
}