import {DataContext} from '../../appContext/data.context';
import * as React from 'react';
import {TableAndChartComponent} from './TableAndChart.component';
import {TableComponent} from '../TableComponents/Table.component';
import {PointsChartComponent} from '../ChartComponents/PointsChart/PointsChart.component.';
import {AreaChartComponent} from '../ChartComponents/AreaChart/AreaChart.component';

export function TableAndAreaChartComponent(props: any) {
    return (
        <DataContext.Consumer>
            {context => <React.Fragment>
                <TableAndChartComponent>
                    <TableComponent title={context.state.title} values={context.state.values}
                                    actions={context.actions}/>
                    <AreaChartComponent title={context.state.title} values={context.state.values}
                                          chartProperties={context.state.chartProperties}/>
                </TableAndChartComponent>
            </React.Fragment>}
        </DataContext.Consumer>
    );
}
