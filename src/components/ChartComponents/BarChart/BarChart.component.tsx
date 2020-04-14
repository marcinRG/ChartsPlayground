import * as React from 'react';
import {Component} from 'react';
import './BarChart.component.scss';

import {transformInputData} from '../../../utils/data.utils'
import {
    createBarChart,
} from '../../../utils/3d.utils';

export class BarChartComponent extends Component<any, any> {
    private readonly svgRef: any;

    constructor(props: any) {
        super(props);
        this.svgRef = React.createRef<HTMLElement>();
    }

    componentDidMount(): void {
        this.svgRef.current = createBarChart(this.svgRef.current,
            transformInputData(this.props.values).data, this.props.chartProperties);
    }

    render() {
        this.svgRef.current = createBarChart(this.svgRef.current,
            transformInputData(this.props.values).data, this.props.chartProperties);
        return (
            <div className="chart-component">
                <label className="chart-title">{this.props.title}</label>
                <svg ref={this.svgRef} className="chart-svg" xmlns="http://www.w3.org/2000/svg" width="500"
                     height="500" viewBox="0 0 500 500">
                </svg>
            </div>);
    }
}

