import * as React from 'react';
import './TableAndChart.component.scss';

export function TableAndChartComponent(props: any) {
    return (
        <div className="table-chart-component">
            {props.children}
        </div>
    );
}
