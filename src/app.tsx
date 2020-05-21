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
import {SearchResultsPage} from './components/Pages/SearchPage/SearchResults.page';
import {OtherContext} from './appContext/other.context';
import {PageTitles} from './enums/PageTitles';
import {ErrorPage} from './components/Pages/ErrorPage/Error.page';

ReactDOM.render(
    <OtherProvider>
        <Router hashType="slash">
            <OtherContext.Consumer>
                {context =>
                    <React.Fragment>
                        <PageHeaderComponent showSplashScreen={context.state.splashScreenVisible}
                                             changeMenuVisibility={context.actions.toggleMainMenuVisibility}
                                             showMenu={context.state.mainMenuVisible}/>
                        <Switch>
                            <Route path={'/'+ PageTitles.CHARTS_DETAILS_PAGE + '/:chartId'} component={ChartsDetails}/>
                            <Route path={'/' + PageTitles.SEARCH_PAGE +'/:searchText?'} component={SearchResultsPage}/>
                            <Route path={'/' + PageTitles.CHARTS_PAGE}>
                                <ChartsPage/>
                            </Route>
                            <Route path={'/'+ PageTitles.INFO_PAGE}>
                                <InfoPage/>
                            </Route>
                            <Route exact path={'/' + PageTitles.HOME_PAGE}>
                                <HomePage toggleSplashScreenVisibility={context.actions.toggleSplashScreenVisibility}/>
                            </Route>
                            <Route>
                                <ErrorPage/>
                            </Route>
                        </Switch>
                    </React.Fragment>
                }
            </OtherContext.Consumer>
            <FooterComponent/>
        </Router>
    </OtherProvider>, document.getElementById('App')
);

