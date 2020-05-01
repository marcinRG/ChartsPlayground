import * as React from 'react';
import {Context} from 'react';
import {IChartDescription, IOtherProviderState} from './Other.provider';

export interface IOtherContextState {
    state?: IOtherProviderState;
    actions?: {
        changeSelectedChart?: (i: number) => void;
        toggleSearchFormTextInput?:() => void;
        changeSearchFormText?: (text: string) => void;
        setGoToSearchPage?: (b: boolean) => void;
        toggleSplashScreenVisibility?: () => void;
    };
}

export const OtherContext: Context<IOtherContextState> = React.createContext<IOtherContextState>({});
