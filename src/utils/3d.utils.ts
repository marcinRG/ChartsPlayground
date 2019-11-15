import {IChartProperties} from '../interfaces/IChartProperties';
import * as d3 from 'd3';

export function getChartWidth(chartProperties: IChartProperties): number {
    return chartProperties.xMax - (chartProperties.margins.left + chartProperties.margins.right);
}

export function getChartHeight(chartProperties: IChartProperties): number {
    return chartProperties.yMax - (chartProperties.margins.top + chartProperties.margins.bottom);
}

export function getExtent(data: any[], field: string, addBounds: boolean = false): [number, number] {
    const extent = d3.extent(data, (d) => {
        return d[field];
    });
    if (addBounds) {
        extent[0] = extent[0] - .1 * extent[1];
        extent[1] = extent[1] + .1 * extent[1];
    }
    return extent;
}

export function getYRange(charProperties: IChartProperties): any {
    return [getChartWidth(charProperties), 0];
}

export function getXRange(chartProperties: IChartProperties): any {
    return [0, getChartHeight(chartProperties)];
}

export function getScale(range: [number, number], extent: [number, number]): (val: number) => number {
    return d3.scaleLinear().domain(extent).range(range);
}

function translateElement(element: any, left: number, top: number) {
    return element.attr('transform', `translate(${left} ${top})`);
}

export function appendXAxis(svgElement: any, scale: any, chartProperties: IChartProperties): any {
    let axisXSvg = svgElement.append('g');
    axisXSvg = translateElement(axisXSvg, chartProperties.margins.left,
        chartProperties.margins.top + getChartHeight(chartProperties));
    const axis = d3.axisBottom(scale);
    axisXSvg.call(axis);
}

export function appendYAxis(svgElement: any, scale: any, chartProperties: IChartProperties): any {
    let axisYSvg = svgElement.append('g');
    axisYSvg = translateElement(axisYSvg, chartProperties.margins.left, chartProperties.margins.top);
    const axis = d3.axisLeft(scale);
    axisYSvg.call(axis);
}

export function appendXGrid(svgElement: any, scale: any, chartProperties: IChartProperties): any {
    let gridXSvg = svgElement.append('g').attr('class', 'grid x');
    gridXSvg = translateElement(gridXSvg, chartProperties.margins.left,
        chartProperties.margins.top);
    const axis = d3.axisBottom(scale).tickSizeInner(getChartHeight(chartProperties)).tickSizeOuter(0);
    gridXSvg.call(axis);
}

export function appendYGrid(svgElement: any, scale: any, chartProperties: IChartProperties): any {
    let gridYSvg = svgElement.append('g').attr('class', 'grid y');
    gridYSvg = translateElement(gridYSvg, chartProperties.margins.left,
        chartProperties.margins.top);
    const axis = d3.axisRight(scale).tickSizeInner(getChartWidth(chartProperties)).tickSizeOuter(0);
    gridYSvg.call(axis);
}

export function appendBars(svgElement: any, scaleX: any, scaleY: any, chartProperties: IChartProperties, data: any) {
    let chart = svgElement.append('g');
    chart = translateElement(chart, chartProperties.margins.left, chartProperties.margins.top);
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

export function appendPoints(svgElement: any, scaleX: any, scaleY: any, chartProperties: IChartProperties, data: any) {
    let chart = svgElement.append('g');
    chart = translateElement(chart, chartProperties.margins.left, chartProperties.margins.top);
    chart.selectAll('circle').data(data).enter().append('circle')
        .attr('r', '5')
        .attr('stroke', 'pink')
        .attr('stroke-width', '3')
        .attr('fill', 'red')
        .attr('cx', (d: any) => {
            return scaleX(d.x);
        })
        .attr('cy', (d: any) => {
            return scaleY(d.y);
        });
}

export function appendLine(svgElement: any, scaleX: any, scaleY: any, chartProperties: IChartProperties, data: any) {
    let chart = svgElement.append('g');
    chart = translateElement(chart, chartProperties.margins.left, chartProperties.margins.top);
    const lineGen = d3.line().x((d: any) => {
        return scaleX(d.x);
    }).y((d: any) => {
        return scaleY(d.y)
    }).curve(d3.curveCardinal);

    chart.append('path').attr('d', lineGen(data))
        .attr('fill', 'transparent')
        .attr('stroke', 'black')
}

export function appendArea(svgElement: any, scaleX: any, scaleY: any, chartProperties: IChartProperties, data: any) {
    let chart = svgElement.append('g');
    chart = translateElement(chart, chartProperties.margins.left, chartProperties.margins.top);
    const areaGen = d3.area()
        .x((d: any) => {
            return scaleX(d.x);
        })
        .y0(() => {
            return scaleY(0);
        })
        .y1((d: any) => {
            return scaleY(d.y);
        }).curve(d3.curveCardinal);

    chart.append('path').attr('d', areaGen(data))
        .attr('fill', 'pink')
        .attr('stroke', 'transparent');
}

export function appendPie(svgElement: any, scaleValues: any, colorScale: any, chartProperties: IChartProperties, data: any) {
    let chart = svgElement.append('g');
    chart = translateElement(chart, chartProperties.margins.left, chartProperties.margins.top);


    // const areaGen = d3.area()
    //     .x((d: any) => {
    //         return scaleValues(d.x);
    //     })
    //     .y1((d: any) => {
    //         return colorScale(d.x);
    //     }).curve(d3.curveCardinal);
    // chart.append('path').attr('d', areaGen(data))
    //     .attr('fill', 'pink')
    //     .attr('stroke', 'transparent');
}
