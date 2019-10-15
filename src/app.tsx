import './app.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {PageHeaderComponent} from './components/PageElements/PageHeader/PageHeader.component';
//import {TableAndChartComponent} from './components/TableAndChartComponent/TableAndChart.component';

ReactDOM.render(
    <React.Fragment>
        <PageHeaderComponent/>
    </React.Fragment>,
    document.getElementById('App')
);
