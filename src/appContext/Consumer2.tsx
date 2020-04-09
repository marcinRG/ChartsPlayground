import * as React from 'react';
import {Component} from 'react';
import { AppContext } from './app.context';

export class Consumer2 extends Component {
    constructor(props: any) {
        super(props);
    }
    render() {

        return (
            <AppContext.Consumer>
                {context => <div>
                    <input type="text" />
                    <p>{context.text}</p>
                    <button onClick={context.changeText}>Push button</button>
                </div>}
            </AppContext.Consumer>
        );
    }
}
