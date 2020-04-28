import * as React from 'react';
import {Context} from 'react';
import {IChartDescription, IOtherProviderState} from './Other.provider';

export interface IOtherContextState {
    state?: IOtherProviderState;
    actions?: {
        changeSelectedChart?: (i: number) => void;
    };
}

export const OtherContext: Context<IOtherContextState> = React.createContext<IOtherContextState>({});
