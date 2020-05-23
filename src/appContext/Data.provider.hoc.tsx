import * as React from 'react';
import {Component} from 'react';
import {IChartData} from './charts.data.providers';
import {IDataContextState} from './data.context';
import {Context} from 'react';

export interface IWidthHeight {
    width: number;
    height: number;
}

export function DataProviderHOC(DataContext: Context<IDataContextState>, initData: IChartData): any {
    return (
        class DataProvider extends Component<IDataContextState, IChartData> {
            public state: IChartData;

            constructor(props: any) {
                super(props);
                this.state = initData;
                this.changeTableCellValue = this.changeTableCellValue.bind(this);
                this.addColumnToTable = this.addColumnToTable.bind(this);
                this.addRowToTable = this.addRowToTable.bind(this);
                this.getTableSize = this.getTableSize.bind(this);
                this.getWidestRow = this.getWidestRow.bind(this);
                this.changeTitle = this.changeTitle.bind(this);
            }

            private changeTableCellValue(newValue: any, row: number, column: number): void {
                let newValues: any = [...this.state.values];
                newValues[row][column] = newValue;
                this.setState({
                    values: newValues
                });
            }

            private addColumnToTable() {
                const widestRow = getWidestRowIndex(this.state.values);
                let newValues: any = [...this.state.values];
                newValues[widestRow].push('');
                this.setState({
                    values: newValues
                });
            }

            private changeTitle(newTitle: string) {
                this.setState({
                    title: newTitle
                });
            }

            private addRowToTable() {
                let newValues: any = [...this.state.values];
                newValues.push([]);
                this.setState({
                    values: newValues
                });
            }

            private getTableSize(): IWidthHeight {
                return getTableSize(this.state.values);
            }

            private getWidestRow() {
                return getWidestRowIndex(this.state.values);
            }

            render(): any {
                return (
                    <DataContext.Provider value={
                        {
                            state: this.state,
                            actions: {
                                changeTableCellValue: this.changeTableCellValue,
                                addColumnToTable: this.addColumnToTable,
                                addRowToTable: this.addRowToTable,
                                getTableSize: this.getTableSize,
                                getWidestRow: this.getWidestRow,
                                changeTitle: this.changeTitle
                            }
                        }}>
                        {this.props.children}
                    </DataContext.Provider>
                );
            }
        }
    );
}

function dataIsArray(data: any) {
    return (Array.isArray(data) && data.length > 0 && Array.isArray(data[0]));
}

function getTableSize(array: Array<Array<any>>): IWidthHeight {
    let height = 0;
    let width = 0;

    if (dataIsArray(array)) {
        if (array.length > height) {
            height = array.length;
        }
        width = getTableWidth(array);
    }
    return {
        width,
        height
    };
}

export function getTableWidth(array: Array<Array<any>>, initValue: number = 0): number {
    return array.reduce((previousValue: any, currentValue: Array<any>) => {
        if (currentValue.length > previousValue) {
            return currentValue.length;
        }
        return previousValue;
    }, initValue);
}

function getWidestRowIndex(array: Array<Array<any>>, initValue: number = 0): number {
    return array.reduce((previousValue: any, currentValue: Array<any>, index: number, array: Array<Array<any>>) => {
        if (currentValue.length > array[previousValue].length) {
            return index;
        }
        return previousValue;
    }, initValue);
}
