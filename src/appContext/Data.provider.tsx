import * as React from 'react';
import {Component, ReactNode} from 'react';
import {AppContext} from './app.context'

interface IChildren {
    children: any;
}

export class DataProvider extends Component<any> {
    state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            text: 'something',
            data: [12, 34, 55, 67, 88, 105],
            dataNumbers: [
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
            barChartData: [
                {x: 3, y: 10},
                {x: 2, y: 70},
                {x: 6, y: 75},
                {x: 8, y: 100},
                {x: 1, y: 47},
                {x: 4, y: 55},
                {x: 5, y: 20},
                {x: 7, y: 82}],
            pointsCharData: [
                {x: 3, y: 10},
                {x: 2, y: 70},
                {x: 6, y: 75},
                {x: 8, y: 100},
                {x: 1, y: 47},
                {x: 4, y: 55},
                {x: 5, y: 20},
                {x: 7, y: 82}],
        };
    }

    render() {
        return (
            <AppContext.Provider value={
                {
                    text : this.state.text,
                    table1: this.state.pointsCharData,
                    changeText: ():void => {
                        const newText:string = 'Xoxo';
                        this.setState(
                            {
                                text: newText
                            }
                        )
                    },
                    changeText2: (newText:string):void => {
                        this.setState(
                            {
                                text: newText
                            }
                        )
                    }
                }}>
                {this.props.children}
            </AppContext.Provider>);
    }
}
