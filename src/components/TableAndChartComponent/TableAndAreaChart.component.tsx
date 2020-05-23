import {DataContext} from '../../appContext/data.context';
import * as React from 'react';
import {TableAndChartComponent} from './TableAndChart.component';
import {TableComponent} from '../TableComponents/Table.component';
import {AreaChartComponent} from '../ChartComponents/AreaChart/AreaChart.component';

export function TableAndAreaChartComponent() {
    return (
        <DataContext.Consumer>
            {context => <React.Fragment>
                <TableAndChartComponent>
                    <TableComponent state={context.state}
                                    actions={context.actions}/>
                    <AreaChartComponent title={context.state.title} values={context.state.values}
                                          chartProperties={context.state.chartProperties}/>
                </TableAndChartComponent>
            </React.Fragment>}
        </DataContext.Consumer>
    );
}
