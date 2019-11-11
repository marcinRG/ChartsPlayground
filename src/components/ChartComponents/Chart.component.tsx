import './Chart.component.scss';
import * as React from 'react';
import * as d3 from 'd3';
import {Component} from 'react';

export class ChartComponent extends Component {
    private svgRef: any;
    private dataTable: number[];
    private chartProperties: any;

    constructor(props: any) {
        super(props);
        this.svgRef = React.createRef<HTMLElement>();
        this.dataTable = [1, 20, 40, 60, 80, 100, 120, 140, 160];
        this.chartProperties = {
            margins: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50
            },
            size: {
                xMin: 0,
                xMax: 400,
                yMin: 400,
                yMax: 0
            }
        }
    }

    componentDidMount(): void {
        console.log(this.svgRef.current);
        const svg = d3.select(this.svgRef.current);
        let yScale = d3.scaleLinear()
            .domain([0, d3.max(this.dataTable)])
            .range([this.chartProperties.size.yMin, this.chartProperties.size.yMax]);

        let xScale = d3.scaleLinear()
            .domain([0, this.dataTable.length])
            .range([this.chartProperties.size.xMin, this.chartProperties.size.xMax]);


        let axisY = svg.append('g');
        axisY.attr('transform', `translate(${this.chartProperties.margins.left} ${this.chartProperties.margins.right})`);
        let yAxis = d3.axisLeft(yScale);
        axisY.call(yAxis);

        let axisX = svg.append('g');
        axisX.attr('transform', `translate(${this.chartProperties.margins.left} ${this.chartProperties.margins.right+this.chartProperties.size.yMin})`);
        let xAxis = d3.axisBottom(xScale);
        axisX.call(xAxis);


        let chart = svg.append('g');
        chart.attr('transform', `translate(${this.chartProperties.margins.left} ${this.chartProperties.margins.right})`);
        chart.selectAll('rect').data(this.dataTable).enter().append('rect')
            .attr('height', (d) => {
                return this.chartProperties.size.yMin-yScale(d);
            })
            .attr('width', '15').attr('fill', 'pink')
            .attr('x', (d, i) => {
                return xScale(i);

            })
            .attr('y', (d) => {
                return yScale(d);
            });
    }

    render() {
        return (
            <div className="chart-component">
                <label className="chart-title">Chart title</label>
                <svg ref={this.svgRef} className="chart-svg" xmlns="http://www.w3.org/2000/svg" width="500" height="500"
                     viewBox="0 0 500 500">
                </svg>
            </div>
        );
    }
}
