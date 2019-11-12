import * as React from 'react';
import * as d3 from 'd3';
import {Component} from 'react';

interface IChartProperties {
    margins: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }
    xMax: number;
    yMax: number;
}


export class BarChartComponent extends Component {
    private svgRef: any;
    private data: any;
    private chartProperties: IChartProperties;

    constructor(props: any) {
        super(props);
        this.data = [{x: 3, y: 10}, {x: 2, y: 70},{x: 6, y: 75}, {x: 8, y: 100}, {x: 1, y: 47}, {x: 4, y: 55}, {x: 5, y: 20}, {x: 7, y: 82}];
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
        console.log(this.svgRef.current);
        const svg = d3.select(this.svgRef.current);
        const xExtent = getExtent(this.data, 'x');
        const yExtent = getExtent(this.data, 'y');
        const xRange = getXRange(this.chartProperties);
        const yRange = getYRange(this.chartProperties);
        const xScale = getScale(xRange, xExtent);
        const yMax = d3.max(this.data, (d: any) => {
            return +d.y;
        });
        const yScale = getScale(yRange, [0, yMax]);
        appendXAxis(svg, xScale, this.chartProperties);
        appendYAxis(svg, yScale, this.chartProperties);
        appendBars(svg, xScale, yScale, this.chartProperties, this.data);
    }

    render() {
        this.svgRef = React.createRef<HTMLElement>();
        return (
            <div className="chart-component">
                <label className="chart-title">Chart title</label>
                <svg ref={this.svgRef} className="chart-svg" xmlns="http://www.w3.org/2000/svg" width="500" height="500"
                     viewBox="0 0 500 500">
                </svg>
            </div>);
    }

}

function getChartWidth(chartProperties: IChartProperties): number {
    return chartProperties.xMax - (chartProperties.margins.left + chartProperties.margins.right);
}

function getChartHeight(chartProperties: IChartProperties): number {
    return chartProperties.yMax - (chartProperties.margins.top + chartProperties.margins.bottom);
}

function getExtent(data: any[], field: string): [number, number] {
    return d3.extent(data, (d) => {
        return d[field];
    });
}

function getYRange(charProperties: IChartProperties): any {
    return [getChartWidth(charProperties), 0];
}

function getXRange(chartProperties: IChartProperties): any {
    return [0, getChartHeight(chartProperties)];
}

function getScale(range: [number, number], extent: [number, number]): (val: number) => number {
    return d3.scaleLinear().domain(extent).range(range);
}

function appendXAxis(svgElement: any, scale: any, chartProperties: IChartProperties): any {
    const axisXSvg = svgElement.append('g');
    axisXSvg.attr('transform', `translate(${chartProperties.margins.left} ${chartProperties.margins.right + getChartHeight(chartProperties)})`);
    const axis = d3.axisBottom(scale);
    axisXSvg.call(axis);
}

function appendYAxis(svgElement: any, scale: any, chartProperties: IChartProperties): any {
    const axisYSvg = svgElement.append('g');
    axisYSvg.attr('transform', `translate(${chartProperties.margins.left} ${chartProperties.margins.right})`);
    const axis = d3.axisLeft(scale).tickSizeInner(-getChartHeight(chartProperties))
        .tickSizeOuter(0);
    axisYSvg.call(axis);
}

function appendBars(svgElement: any, scaleX: any, scaleY: any, chartProperties: IChartProperties, data: any) {
    const chart = svgElement.append('g');
    chart.attr('transform', `translate(${chartProperties.margins.left} ${chartProperties.margins.right})`);
    chart.selectAll('rect').data(data).enter().append('rect')
        .attr('height', (d: any) => {
            return getChartHeight(chartProperties) - scaleY(d.y);
        })
        .attr('width', '30')
        .attr('fill', 'pink')
        .attr('x', (d: any) => {
            return scaleX(d.x);
        })
        .attr('y', (d: any) => {
            return scaleY(d.y);
        });
}
