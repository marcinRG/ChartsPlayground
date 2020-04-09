import * as React from 'react';
import {Context} from 'react';

// export interface IAppState {
//     data: any[];
//     dataNumbers: number[][];
//     barChartData: any[];
//     pointsCharData: any[];
//     text: string
// }

export const AppContext: Context<any> = React.createContext<any>({});
