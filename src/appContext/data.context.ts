import * as React from 'react';
import {Context} from 'react';
import {IChartData} from './charts.data.providers';
import {IWidthHeight} from './Data.provider.hoc';

export interface IDataContextState {
    state?: IChartData,
    actions?: {
        changeTableCellValue: (newValue: any, row: number, column: number) => void;
        addColumnToTable: () => void;
        addRowToTable: () => void;
        getTableSize: () => IWidthHeight;
        getWidestRow: () => void;
        changeTitle: (newTitle: string) => void;
    }
}

export const DataContext: Context<IDataContextState> = React.createContext<IDataContextState>({});
