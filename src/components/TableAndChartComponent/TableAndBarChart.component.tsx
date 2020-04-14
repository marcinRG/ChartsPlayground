import {DataContext} from '../../appContext/data.context';
import * as React from 'react';
import {TableAndChartComponent} from './TableAndChart.component';
import {TableComponent} from '../TableComponents/Table.component';
import {BarChartComponent} from '../ChartComponents/BarChart/BarChart.component';

export function TableAndBarChartComponent(props: any) {
    return (
        <DataContext.Consumer>
            {context => <React.Fragment>
                <TableAndChartComponent>
                    <TableComponent title={context.state.title} values={context.state.values}
                                     actions={context.actions}/>
                    <BarChartComponent title={context.state.title} values={context.state.values}
                                        chartProperties={context.state.chartProperties}/>
                </TableAndChartComponent>
            </React.Fragment>}
        </DataContext.Consumer>
    );
}
