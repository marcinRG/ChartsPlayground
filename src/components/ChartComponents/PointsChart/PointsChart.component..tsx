import * as React from 'react';
import {Component} from 'react';
import {createAreaChart, createChart, createPointsChart} from '../../../utils/3d.utils';
import {transformInputData} from '../../../utils/data.utils';

export class PointsChartComponent extends Component<any, any> {
    private svgRef: any;

    constructor(props: any) {
        super(props);
        this.svgRef = React.createRef<HTMLElement>();
    }

    componentDidMount(): void {
        this.svgRef.current = createChart(this.svgRef.current,
            transformInputData(this.props.values), this.props.chartProperties,createPointsChart);
    }

    render() {
        this.svgRef.current = createChart(this.svgRef.current,
            transformInputData(this.props.values), this.props.chartProperties,createPointsChart);
        return (
            <div className="chart-component">
                <label className="chart-title">Chart title</label>
                <svg ref={this.svgRef} className="chart-svg" xmlns="http://www.w3.org/2000/svg" width="500" height="500"
                     viewBox="0 0 500 500">
                </svg>
            </div>);
    }
}
