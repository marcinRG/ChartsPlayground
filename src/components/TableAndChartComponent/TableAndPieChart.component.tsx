import {DataContext} from '../../appContext/data.context';
import * as React from 'react';
import {TableAndChartComponent} from './TableAndChart.component';
import {TableComponent} from '../TableComponents/Table.component';
import {PieChartComponent} from '../ChartComponents/PieChart/PieChart.component';


export function TableAndPieChartComponent() {
    return (
        <DataContext.Consumer>
            {context => <React.Fragment>
                <TableAndChartComponent>
                    <TableComponent title={context.state.title} values={context.state.values}
                                    actions={context.actions}/>
                    <PieChartComponent title={context.state.title} values={context.state.values}
                                        chartProperties={context.state.chartProperties}/>
                </TableAndChartComponent>
            </React.Fragment>}
        </DataContext.Consumer>
    );
}
