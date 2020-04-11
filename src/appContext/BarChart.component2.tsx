import * as React from 'react';
import * as d3 from 'd3';
import {Component} from 'react';
import '../components/ChartComponents/BarChart/BarChart.component.scss';
import {IChartProperties} from '../interfaces/IChartProperties';
import {
    appendBars,
    appendXAxis,
    appendYAxis, appendYGrid,
    getExtent,
    getScale,
    getXRange,
    getYRange
} from '../utils/3d.utils';
import {getTableWidth} from './Data.provider';


export class BarChartComponent2 extends Component<any, any> {
    private svgRef: any;
    private chartProperties: IChartProperties;

    constructor(props: any) {
        super(props);
        this.svgRef = React.createRef<HTMLElement>();
        this.chartProperties = {
            margins: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50
            },
            xMax: 500,
            yMax: 500,
        }
    }

    componentDidMount(): void {
        this.svgRef.current = this.createChart(this.svgRef.current, transformInputData(this.props.values).data);
    }

    createChart(svgElement: any, data: any) {
        const svg = d3.select(svgElement);
        svg.selectAll('g').remove();
        //d3.selectAll('svg > *').remove();
        const xExtent = getExtent(data, 'x', true);
        const xRange = getXRange(this.chartProperties);
        const yRange = getYRange(this.chartProperties);
        const xScale = getScale(xRange, xExtent);
        const yMax = d3.max(data, (d: any) => {
            return +d.y;
        });
        const yScale = getScale(yRange, [0, yMax]);
        appendYGrid(svg, yScale, this.chartProperties);
        appendXAxis(svg, xScale, this.chartProperties);
        appendYAxis(svg, yScale, this.chartProperties);
        appendBars(svg, xScale, yScale, this.chartProperties, data);
        return svgElement;
    }

    render() {
        this.svgRef.current = this.createChart(this.svgRef.current, transformInputData(this.props.values).data);
        return (
            <div className="chart-component">
                <label className="chart-title">{this.props.title}</label>
                <svg ref={this.svgRef} className="chart-svg" xmlns="http://www.w3.org/2000/svg" width="500" height="500"
                     viewBox="0 0 500 500">
                </svg>
            </div>);
    }
}

function transformInputData(array: any[]): any {
    if (isDataValid(array)) {
        return {
            status: 'OK',
            data: getData(array, ['x', 'y'])
        };
    }
    return {
        status: 'Error',
        data: []
    };
}

export interface IIndexable {
    [key: string]: any;
}

function getData(array: any[], labels: string[]): any[] {
    const results = [];
    for (const elem of array) {
        const obj: IIndexable = {};
        for (let i = 0; i < elem.length; i++) {
            obj[labels[i]] = Number(elem[i]);
        }
        results.push(obj);
    }
    return results;
}

function isDataValid(array: any[]): boolean {
    const maxLength = getTableWidth(array);
    if (entryIsArray(array)) {
        const dataValid = array.every((element: any) => {
            const isArray = (entryIsArray(element) && (element.length == maxLength));
            let everyElemExists = false;
            if (isArray) {
                everyElemExists = element.every((elem: any) => {
                    return elem;
                });
            }
            return (isArray) && (everyElemExists);
        });
        return dataValid;
    }
}

function entryIsArray(data: any) {
    return (Array.isArray(data) && data.length > 0);
}
