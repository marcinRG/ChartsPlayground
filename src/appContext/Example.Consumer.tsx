import * as React from 'react';
import {Component} from 'react';
import {DataProvider} from './Data.provider';
import {Consumer2} from './Consumer2';

export class ExampleConsumer extends Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <DataProvider>
                <h1>Something</h1>
                <Consumer2 />
            </DataProvider>
        );

    }
}
