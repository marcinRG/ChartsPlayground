import * as React from 'react';
import {AppContext} from './app.context';
import {TableComponent2} from './Table.component2';
import {BarChartComponent2} from './BarChart.component2';
import '../components/TableAndChartComponent/TableAndChart.component.scss';

export function Consumer4() {
    return (
        <AppContext.Consumer>
            {context => <React.Fragment>
                <div className="table-chart-component">
                    <TableComponent2 key={1} title={context.state.title} values={context.state.values} actions={context.actions} />
                    <BarChartComponent2 title={context.state.title} values={context.state.values}/>
                </div>
            </React.Fragment>}
        </AppContext.Consumer>
    );
}

// https://www.nafrontendzie.pl/context-api-react
// https://flaviocopes.com/react-context-api/
// https://levelup.gitconnected.com/sharing-state-with-the-react-context-api-f24fcb9c7ce2
// https://www.toptal.com/react/react-context-api
// https://reactjs.org/docs/context.html#reactcreatecontext
// https://medium.com/@chathuranga94/introduction-to-react-context-api-90f5e4d7a7a9
