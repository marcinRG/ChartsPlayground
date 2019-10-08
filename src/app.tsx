import './app.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {HelloWorldComponent} from './components/other/HelloWorld.component';
import {TableComponent} from './components/TableComponents/Table.component';

ReactDOM.render(
    <React.Fragment>
        <HelloWorldComponent/>
        <TableComponent/>
    </React.Fragment>,
    document.getElementById('App')
);
