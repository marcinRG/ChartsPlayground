import './app.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {PageHeaderComponent} from './components/PageElements/PageHeader/PageHeader.component';
import {FooterComponent} from './components/PageElements/Footer/Footer.component';
import {HomePage} from './components/Pages/HomePage/Home.page';
import {ChartsPage} from './components/Pages/ChatsPage/Charts.page';
import {InfoPage} from './components/Pages/InfoPage/Info.page';
import {DataProvider} from './appContext/Data.provider';
import {Consumer2} from './appContext/Consumer2';
import {Consumer3} from './appContext/Consumer3';
//import {TableAndChartComponent} from './components/TableAndChartComponent/TableAndChart.component';

ReactDOM.render(
    <DataProvider>
        <Consumer2></Consumer2>
        <Consumer3/>
    </DataProvider>,
    document.getElementById('App')
);

{/*<Router hashType="slash">*/}
{/*    <PageHeaderComponent/>*/}
{/*    <Switch>*/}
{/*        <Route path="/charts">*/}
{/*            <ChartsPage/>*/}
{/*        </Route>*/}
{/*        <Route path="/info">*/}
{/*            <InfoPage/>*/}
{/*        </Route>*/}
{/*        <Route exact path="/">*/}
{/*            <HomePage/>*/}
{/*        </Route>*/}

{/*    </Switch>*/}
{/*    <FooterComponent/>*/}
{/*</Router>*/}
