import * as React from 'react';
import {Component} from 'react';
//import {ITableState} from '../../interfaces/ITableState';

interface IState {
    title: string;
    columnHeaders?: string[];
    rowHeaders?: string[];
    values?: any;
    selectedRow?: number;
    selectedColumn?: number;
    otherData?: any;
}

export class TableSimplifiedComponent extends Component<{},IState>{
    private readonly tableRef: any;

    constructor(props: any) {
        super(props);
        this.tableRef = React.createRef<HTMLTableElement>();
        this.state = {
            title: 'Table title',
            rowHeaders: ['Row header 1', 'Row header 2'],
            columnHeaders: ['Column header 1', 'Column header 2'],
            values: ['1','2'],
        };
        this.changeTable = this.changeTable.bind(this);
    }

    private changeTable() {
        console.log('change table');
    }

    private createTable(): any {
        return (
            <table>
                <thead contentEditable suppressContentEditableWarning={true} onInput={this.changeTable}>
                <tr>
                    <td>Header 1</td>
                    <td>Header 2</td>
                </tr>
                </thead>
                <tbody contentEditable suppressContentEditableWarning={true} onInput={this.changeTable}>
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>6</td>
                </tr>
                </tbody>
            </table>
        )
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number |
        {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<div>
            <p>{this.state.title}</p>
            {this.createTable()}
            <button onClick={this.changeTable}>Costam</button>
        </div>);
    }
}
