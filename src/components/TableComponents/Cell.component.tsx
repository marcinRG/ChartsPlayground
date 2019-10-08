import * as React from 'react';

interface ICellProps {
    value?: any;
    row: number;
    column: number;
    action: (newValue: any, row: number, column: number) => void;
}

export function CellComponent(props: ICellProps) {
    const func = (e: any): void => {
        props.action(e.target.value, props.row, props.column);
    };
    return (
        <td>
            <input type="text" value={props.value} onChange={func}/>
        </td>);
}
