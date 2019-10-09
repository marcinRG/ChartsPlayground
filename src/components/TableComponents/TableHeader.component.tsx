import * as React from 'react';
import './TableHeader.component.scss';

interface ITableHeaderProps {
    value?: any;
    action: () => void;
}

export function TableHeaderComponent(props: ITableHeaderProps) {
    const func = () => {
        props.action();
    };
    return (
        <th className="table-header-cell" onClick={func}>{props.value}</th>
    );
}
