import * as React from 'react';
import {Component} from 'react';
import {OtherContext} from './other.context';
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
import {ChartTypes} from '../enums/ChartTypes';

export class OtherProvider extends Component<any, any> {
    public state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            splashScreenVisible: true,
            chartList: [
                {
                    iD: ChartTypes.BAR_CHART,
                    name: 'bar chart',
                    image: barimg,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: ChartTypes.LINE_CHART,
                    name: 'line + points chart',
                    image: linepointimg,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: ChartTypes.PIE_CHART,
                    name: 'pie chart',
                    image: pieimg,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: ChartTypes.POINT_CHART,
                    name: 'points chart',
                    image: pointsimg,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: ChartTypes.AREA_CHART,
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
