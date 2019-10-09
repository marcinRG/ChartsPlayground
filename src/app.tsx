import './app.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {TableAndChartComponent} from './components/TableAndChartComponent/TableAndChart.component';

ReactDOM.render(
    <React.Fragment>
        <TableAndChartComponent/>
    </React.Fragment>,
    document.getElementById('App')
);
