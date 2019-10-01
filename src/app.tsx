import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {func, func2} from './other/other';
import {HelloWorldComponent} from './components/HelloWorld.component';
console.log(ReactDOM);

ReactDOM.render(
    <React.Fragment>
        <HelloWorldComponent/>
        <div>func1:</div>
        <div>{func(345)}</div>
        <div>func2:</div>
        <div>{func2(52, 45)}</div>
    </React.Fragment>,
    document.getElementById('App')
);
