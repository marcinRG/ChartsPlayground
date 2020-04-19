import './app.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {PageHeaderComponent} from './components/PageElements/PageHeader/PageHeader.component';
import {FooterComponent} from './components/PageElements/Footer/Footer.component';
import {HomePage} from './components/Pages/HomePage/Home.page';
import {ChartsPage} from './components/Pages/ChatsPage/Charts.page';
import {InfoPage} from './components/Pages/InfoPage/Info.page';
import {OtherProvider} from './appContext/Other.provider';
import {ChartsDetails} from './components/Pages/ChartDetails/ChartDetails.page';
import {AboutPage} from './components/Pages/AboutPage/About.page';

ReactDOM.render(
    <OtherProvider>
        <Router hashType="slash">
            <PageHeaderComponent/>
            <Switch>
                <Route path="/chartsDetails/:chartId" component={ChartsDetails} />
                <Route path="/charts">
                    <ChartsPage/>
                </Route>
                <Route path="/info">
                    <InfoPage/>
                </Route>
                <Route path="/about">
                    <AboutPage/>
                </Route>
                <Route exact path="/">
                    <HomePage/>
                </Route>
            </Switch>
            <FooterComponent/>
        </Router>
    </OtherProvider>, document.getElementById('App')
);

