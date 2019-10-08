import * as React from 'react';

interface ITableHeaderProps {
    value?: any;
    action: () => void;
}

export function TableHeaderComponent(props: ITableHeaderProps) {
    const func = () => {
        props.action();
    };
    return (
        <td onClick={func}>{props.value}</td>
    );
}
