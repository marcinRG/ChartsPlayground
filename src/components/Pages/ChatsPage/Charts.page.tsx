import * as React from 'react';
import {DataProvider} from '../../../appContext/Data.provider';
import {TableAndBarChartComponent} from '../../TableAndChartComponent/TableAndBarChart.component';
import {TableAndLineChartComponent} from '../../TableAndChartComponent/TableAndLineChart.component';
import {TableAndPieChartComponent} from '../../TableAndChartComponent/TableAndPieChart.component';
import {TableAndPointsChartComponent} from '../../TableAndChartComponent/TableAndPointsChart.component';
import {TableAndAreaChartComponent} from '../../TableAndChartComponent/TableAndAreaChart.component';

export function ChartsPage(props: any) {
    return (
        <div>
            <h1>Charts</h1>
            <DataProvider initData={{
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
                selectedColumn: 0
            }}>
                <TableAndBarChartComponent></TableAndBarChartComponent>
            </DataProvider>
            <DataProvider initData={{
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
                selectedColumn: 0
            }}>
                <TableAndLineChartComponent></TableAndLineChartComponent>
            </DataProvider>
            <DataProvider initData={{
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
                selectedColumn: 0
            }}>
                <TableAndPieChartComponent></TableAndPieChartComponent>
            </DataProvider>
            <DataProvider initData={{
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
                selectedColumn: 0
            }}>
                <TableAndPointsChartComponent></TableAndPointsChartComponent>
            </DataProvider>
            <DataProvider initData={{
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
                selectedColumn: 0
            }}>
                <TableAndAreaChartComponent></TableAndAreaChartComponent>
            </DataProvider>
        </div>);
}

function BarChartWithDP(props: any) {
    return (
        <DataProvider initData={{
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
            selectedColumn: 0
        }}>
            <TableAndBarChartComponent></TableAndBarChartComponent>
        </DataProvider>
    );
}

function LineChartWithDP(props: any) {
    return (
        <DataProvider initData={{
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
            selectedColumn: 0
        }}>
            <TableAndLineChartComponent></TableAndLineChartComponent>
        </DataProvider>
    );
}

function PieChartWithDP(props: any) {
    return (
        <DataProvider initData={{
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
            selectedColumn: 0
        }}>
            <TableAndPieChartComponent></TableAndPieChartComponent>
        </DataProvider>
    );
}

function PointChartWithDP(props: any) {
    return (
        <DataProvider initData={{
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
            selectedColumn: 0
        }}>
            <TableAndPointsChartComponent></TableAndPointsChartComponent>
        </DataProvider>
    );
}

function AreaChartWithDP(props: any) {
    return (
        <DataProvider initData={{
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
            selectedColumn: 0
        }}>
            <TableAndAreaChartComponent></TableAndAreaChartComponent>
        </DataProvider>
    );
}
