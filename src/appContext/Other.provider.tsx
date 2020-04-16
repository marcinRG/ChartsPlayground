import {Component} from 'react';
import {OtherContext} from './other.context';
import * as React from 'react';

// @ts-ignore
import * as areaimg from '../../src/images/area-chart.png';
// @ts-ignore
import * as barimg from '../../src/images/bar-chart.png';
// @ts-ignore
import * as pointsimg from '../../src/images/points-chart.png';
// @ts-ignore
import * as linepointimg from '../../src/images/line-point-chart.png';
// @ts-ignore
import * as pieimg from '../../src/images/pie-chart.png';

export class OtherProvider extends Component<any, any> {
    public state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            splashScreenVisible: true,
            chartList: [
                {
                    iD: '1',
                    name: 'bar chart',
                    image: barimg,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: '2',
                    name: 'line + points chart',
                    image: linepointimg,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: '3',
                    name: 'pie chart',
                    image: pieimg,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: '4',
                    name: 'points chart',
                    image: pointsimg,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: '5',
                    name: 'area chart',
                    image: areaimg,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                }
            ]
        }
    }
    render() {
        return (
            <OtherContext.Provider value={
                {
                    state : this.state,
                }}>
                {this.props.children}
            </OtherContext.Provider>);
    }
}
