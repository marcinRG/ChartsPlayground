import * as React from 'react';
import * as d3 from 'd3';
import {Component} from 'react';
import {IChartProperties} from '../../../interfaces/IChartProperties';
import {
    appendArea, appendLine,
    appendPoints,
    appendXAxis,
    appendXGrid, appendYAxis,
    appendYGrid,
    getExtent,
    getScale,
    getXRange,
    getYRange
} from '../../../utils/3d.utils';


export class AreaChartComponent extends Component {
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

        const svg = d3.select(this.svgRef.current);
        const sortedData = this.data.sort((a: any, b: any) => {
            return a.x - b.x;
        });
        const xExtent = getExtent(this.data, 'x');
        const yExtent = getExtent(this.data, 'y', true);
        const xRange = getXRange(this.chartProperties);
        const yRange = getYRange(this.chartProperties);
        const xScale = getScale(xRange, xExtent);
        const yScale = getScale(yRange, yExtent);
        appendXGrid(svg, xScale, this.chartProperties);
        appendYGrid(svg, yScale, this.chartProperties);
        appendXAxis(svg, xScale, this.chartProperties);
        appendYAxis(svg, yScale, this.chartProperties);
        appendArea(svg, xScale, yScale, this.chartProperties, sortedData);
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
