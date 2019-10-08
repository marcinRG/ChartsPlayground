import * as React from 'react';
import {Component} from 'react';
import {CellComponent} from './Cell.component';
import {TableHeaderComponent} from './TableHeader.component';

//import {ITableState} from '../../interfaces/ITableState';

interface IState {
    title: string;
    values: Array<Array<any>>;
    selectedRow?: number;
    selectedColumn?: number;
}

export class TableComponent extends Component<{}, IState> {
    private readonly tableRef: any;

    constructor(props: any) {
        super(props);
        this.tableRef = React.createRef<HTMLTableElement>();
        this.state = {
            title: 'Table title',
            values: [
                [1, 2],
                [1, 4, 5, 7],
                [1, 5, 6, 8, 11],
                [1, 2, 3, 4, 5, 6, 7, 8, 9]],
            selectedRow: 0,
            selectedColumn: 0
        };
        this.changeCell = this.changeCell.bind(this);
        this.clickHeader = this.clickHeader.bind(this);
        this.addColumn = this.addColumn.bind(this);
        this.addRow = this.addRow.bind(this);
    }

    private changeCell(newValue: any, row: number, column: number): void {
        let newValues: any = [...this.state.values];
        newValues[row][column] = newValue;
        this.setState({
            values: newValues
        });
    }

    private addColumn() {
        const widestRow = getWidestRowIndex(this.state.values);
        let newValues: any = [...this.state.values];
        newValues[widestRow].push('');
        this.setState({
            values: newValues
        });
    }

    private addRow() {
        let newValues: any = [...this.state.values];
        newValues.push([]);
        this.setState({
            values: newValues
        });
    }

    private clickHeader(): void {
    }

    private createHeaders(prefix: string): any {
        const tableSize = getTableSize(this.state.values);
        let headers: any[] = [];
        headers.push(<TableHeaderComponent key={-1} action={this.clickHeader} value={'-'}/>);
        for (let i = 0; i < tableSize.width; i++) {
            headers.push(<TableHeaderComponent key={i} action={this.clickHeader} value={prefix + '' + (i + 1)}/>)
        }
        return headers;
    }

    private createTableCells(row: number, maxWidth: number): any {
        let cells: any[] = [];
        cells.push(<TableHeaderComponent action={this.clickHeader} key={row} value={'R' + '' + (row + 1)}/>);
        for (let i = 0; i < maxWidth; i++) {
            const value = this.state.values[row][i] || '';
            cells.push(<CellComponent key={'R' + row + 'C' + i} value={value}
                                      row={row} column={i} action={this.changeCell}/>);
        }
        return cells;
    }

    private createTableRows(maxHeight: number, maxWidth: number): any {
        let rows: any[] = [];
        for (let i = 0; i < maxHeight; i++) {
            rows.push(<tr key={i}>{this.createTableCells(i, maxWidth)}</tr>)
        }
        return rows;
    }


    private createCellsAndColumnHeaders(): any {
        const tableSize = getTableSize(this.state.values);
        return (
            <tbody>
            {this.createTableRows(tableSize.height, tableSize.width)}
            </tbody>
        );
    }

    private createTable(): any {
        return (
            <table>
                <thead>
                <tr>
                    {this.createHeaders('C')}
                </tr>
                </thead>
                {this.createCellsAndColumnHeaders()}
            </table>
        );
    }

    render(): any {
        return (<div>
            <p>{this.state.title}</p>
            {this.createTable()}
            <button onClick={this.addRow}>Add row</button>
            <button onClick={this.addColumn}>Add column</button>
        </div>);
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

function getTableWidth(array: Array<Array<any>>, initValue: number = 0): number {
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
