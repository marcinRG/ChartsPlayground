import '../components/TableComponents/Table.component.scss';
import * as React from 'react';
import {Component} from 'react';
import {TableHeaderComponent} from '../components/TableComponents/TableHeader.component';
import {CellComponent} from '../components/TableComponents/Cell.component';

export class TableComponent2 extends Component<any, any> {
    private readonly tableRef: any;
    private readonly inputRef: any;

    constructor(props: any) {
        super(props);
        this.tableRef = React.createRef<HTMLTableElement>();
        this.inputRef = React.createRef<HTMLInputElement>();
        this.changeTitle=this.changeTitle.bind(this);
        this.clickHeader = this.clickHeader.bind(this);
    }

    private changeTitle() {
        this.props.actions.changeTitle(this.inputRef.current.value);
    }

    private clickHeader(): void {
    }

    private createHeaders(prefix: string): any {
        const tableSize = this.props.actions.getTableSize();
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
            const value = this.props.values[row][i] || '';
            cells.push(<CellComponent key={'R' + row + 'C' + i} value={value}
                                      row={row} column={i} action={this.props.actions.changeTableCellValue}/>);
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
        const tableSize = this.props.actions.getTableSize();
        return (
            <tbody>
            {this.createTableRows(tableSize.height, tableSize.width)}
            </tbody>
       );
    }

    private createTable(): any {
        return (
            <table className="data-table">
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
        return (<div className="data-table-component">
            <label>Dataset title:</label>
            <input type="text"  ref={this.inputRef}  className="table-title" value={this.props.title} onChange={this.changeTitle} />
            <label>Dataset:</label>
            <div className="data-table-wrapper">
                {this.createTable()}
            </div>
            <button onClick={this.props.actions.addRowToTable}>Add row</button>
            <button onClick={this.props.actions.addColumnToTable}>Add column</button>
        </div>);
    }
}
