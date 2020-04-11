import * as React from 'react';
import {Component, ReactNode} from 'react';
import {AppContext} from './app.context'


interface IState {
    title: string;
    values: Array<Array<any>>;
    selectedRow?: number;
    selectedColumn?: number;
}

interface IChildren {
    children: any;
}

export class DataProvider extends Component<any, IState> {
    public state: IState;

    constructor(props: any) {
        super(props);
        this.state = {
            title: 'Table title',
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
            selectedRow: 0,
            selectedColumn: 0
        };

        this.changeTableCellValue= this.changeTableCellValue.bind(this);
        this.addColumnToTable= this.addColumnToTable.bind(this);
        this.addRowToTable= this.addRowToTable.bind(this);
        this.getTableSize= this.getTableSize.bind(this);
        this.getWidestRow= this.getWidestRow.bind(this);
        this.changeTitle= this.changeTitle.bind(this);
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

    private getTableSize() {
        return getTableSize(this.state.values);
    }

    private  getWidestRow() {
        return getWidestRowIndex(this.state.values);
    }

    render() {
        return (
            <AppContext.Provider value={
                {
                    state : this.state,
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
            </AppContext.Provider>);
    }
}

function dataIsArray(data: any) {
    return (Array.isArray(data) && data.length > 0 && Array.isArray(data[0]));
}

function getTableSize(array: Array<Array<any>>): { width: number, height: number } {
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
