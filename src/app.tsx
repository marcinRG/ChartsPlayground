import './app.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {PageHeaderComponent} from './components/PageElements/PageHeader/PageHeader.component';
import {FooterComponent} from './components/PageElements/Footer/Footer.component';
import {HomePage} from './components/Pages/HomePage/Home.page';
import {ChartsPage} from './components/Pages/ChatsPage/Charts.page';
import {InfoPage} from './components/Pages/InfoPage/Info.page';
//import {TableAndChartComponent} from './components/TableAndChartComponent/TableAndChart.component';

ReactDOM.render(
    <Router hashType="slash">
            <PageHeaderComponent/>
            <Switch>
                    <Route path="/charts">
                            <ChartsPage/>
                    </Route>
                    <Route path="/info">
                            <InfoPage/>
                    </Route>
                    <Route exact path="/">
                            <HomePage/>
                    </Route>

            </Switch>
            <FooterComponent/>
    </Router>,
    document.getElementById('App')
);
