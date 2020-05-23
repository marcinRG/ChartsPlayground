import {DataContext} from './data.context';
import {DataProviderHOC} from './Data.provider.hoc';

export interface IChartProperties {
    margins: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    }
    xMax: number;
    yMax: number;
}

export interface  IChartData {
    title: string;
    values: Array<Array<any>>;
    chartProperties: IChartProperties;
    selectedRow: number;
    selectedColumn: number
    canAddRows: boolean
    canAddColumns: boolean;
}

const initDataBarChart: IChartData = {
    title: 'Table bar chart',
    values: [
        [1, 2],
        [2, 25],
        [3, 58],
        [4, 98],
        [5, 73],
        [6, 58],
        [7, 11],
        [8, 82],
        [9, 22],
        [10, 72],
        [11, 98],
        [12, 45]],
    chartProperties: {
        margins: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
        },
        xMax: 500,
        yMax: 500,
    },
    selectedRow: 0,
    selectedColumn: 0,
    canAddRows: true,
    canAddColumns: false
};
const initDataLineChart: IChartData = {
    title: 'Table line chart',
    values: [
        [3, 10],
        [2, 70],
        [6, 75],
        [8, 100],
        [1, 47],
        [4, 55],
        [5, 20],
        [7, 82],
        [9, 25],
        [10, 67]
    ],
    chartProperties: {
        margins: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
        },
        xMax: 500,
        yMax: 500,
    },
    selectedRow: 0,
    selectedColumn: 0,
    canAddRows: true,
    canAddColumns: false
};
const initDataPieChart:IChartData = {
    title: 'Table pie chart',
    values: [
        [2, 25],
        [3, 58],
        [4, 98],
        [5, 73],
        [6, 58],
        [8, 82],
        [9, 22],
        [10, 72],
        [11, 98],
        [12, 45]],
    chartProperties: {
        margins: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
        },
        xMax: 500,
        yMax: 500,
    },
    selectedRow: 0,
    selectedColumn: 0,
    canAddRows: true,
    canAddColumns: false
};
const initDataPointChart: IChartData = {
    title: 'Table point chart',
    values: [
        [1, 2],
        [2, 25],
        [3, 58],
        [4, 98],
        [5, 73],
        [6, 58],
        [7, 11],
        [8, 82],
        [9, 22],
        [10, 72],
        [11, 98],
        [12, 45]],
    chartProperties: {
        margins: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
        },
        xMax: 500,
        yMax: 500,
    },
    selectedRow: 0,
    selectedColumn: 0,
    canAddRows: true,
    canAddColumns: false
};
const initDataAreaChart: IChartData = {
    title: 'Table Area chart',
    values: [[3, 10], [2, 70], [6, 75], [8, 100], [1, 47], [4, 55], [5, 20], [7, 82]],
    chartProperties: {
        margins: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
        },
        xMax: 500,
        yMax: 500,
    },
    selectedRow: 0,
    selectedColumn: 0,
    canAddRows: true,
    canAddColumns: false
};

export const DataProviderBarChart = DataProviderHOC(DataContext, initDataBarChart);
export const DataProviderLineChart = DataProviderHOC(DataContext, initDataLineChart);
export const DataProviderPieChart = DataProviderHOC(DataContext, initDataPieChart);
export const DataProviderPointChart = DataProviderHOC(DataContext, initDataPointChart);
export const DataProviderAreaChart = DataProviderHOC(DataContext, initDataAreaChart);
