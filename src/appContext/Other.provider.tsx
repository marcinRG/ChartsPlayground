import * as React from 'react';
import {Component} from 'react';
import {OtherContext} from './other.context';
// @ts-ignore
import * as areaimg from '../../src/images/area-chart.png';
// @ts-ignore
import * as areabig from '../../src/images/area-chart-big.png';
//-------------------------------------------
// @ts-ignore
import * as barimg from '../../src/images/bar-chart.png';
// @ts-ignore
import * as barbig from '../../src/images/bar-chart-big.png';
//-------------------------------------------
// @ts-ignore
import * as pointsimg from '../../src/images/points-chart.png';
// @ts-ignore
import * as pointsBig from '../../src/images/point-chart-big.png';
//----------------------------------------------
// @ts-ignore
import * as linepointimg from '../../src/images/line-point-chart.png';
// @ts-ignore
import * as linepointBig from '../../src/images/line-chart-big.png';

//----------------------------------------------
// @ts-ignore
import * as pieimg from '../../src/images/pie-chart.png';
// @ts-ignore
import * as pieBig from '../../src/images/pie-chart-big.png';


import {ChartTypes} from '../enums/ChartTypes';

export interface IChartDescription {
    iD: number;
    name: string;
    image: string;
    imageBig: string;
    description: string
}

export class OtherProvider extends Component<{},
    {
        splashScreenVisible: boolean;
        chartList: IChartDescription[];
        selectedCharts: number[];
        currentSelectedChart: number
    }> {
    public state: {
        splashScreenVisible: boolean;
        chartList: IChartDescription[];
        selectedCharts: number[];
        currentSelectedChart: number
    };

    constructor(props: any) {
        super(props);
        this.state = {
            splashScreenVisible: true,
            chartList: [
                {
                    iD: ChartTypes.BAR_CHART,
                    name: 'bar chart',
                    image: barimg,
                    imageBig: barbig,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: ChartTypes.LINE_CHART,
                    name: 'line chart',
                    image: linepointimg,
                    imageBig: linepointBig,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: ChartTypes.PIE_CHART,
                    name: 'pie chart',
                    image: pieimg,
                    imageBig: pieBig,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: ChartTypes.POINT_CHART,
                    name: 'points chart',
                    image: pointsimg,
                    imageBig: pointsBig,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: ChartTypes.AREA_CHART,
                    name: 'area chart',
                    image: areaimg,
                    imageBig: areabig,
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                }
            ],
            selectedCharts: [ChartTypes.AREA_CHART, ChartTypes.PIE_CHART, ChartTypes.BAR_CHART],
            currentSelectedChart: 0
        }
        this.changeSelectedChart = this.changeSelectedChart.bind(this);
    }

    changeSelectedChart(value: number): void {
        let newValue: number;
        if (value === 1) {
            console.log('add 1');
            if (this.state.currentSelectedChart === this.state.selectedCharts.length - 1) {
                newValue = 0;
            } else {
                newValue = this.state.currentSelectedChart + 1;
            }
        }
        if (value === -1) {
            console.log('remove one');
            if (this.state.currentSelectedChart === 0) {
                newValue = this.state.selectedCharts.length - 1;
            } else {
                newValue = this.state.currentSelectedChart - 1;
            }
        }
        console.log('new Value: ' + newValue);
        this.setState({
            currentSelectedChart: newValue
        });
    }

    render() {
        return (
            <OtherContext.Provider value={
                {
                    state: this.state, actions: {
                        changeSelectedChart: this.changeSelectedChart
                    }
                }}>
                {this.props.children}
            </OtherContext.Provider>);
    }
}
