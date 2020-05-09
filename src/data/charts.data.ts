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
import {IObjectCollection} from '../utils/other.utils';

export interface IChartDescription {
    iD: number;
    name: string;
    image: string;
    imageBig: string;
    shortDescription: string;
    description: string;
}

export interface IChartsList extends IObjectCollection<IChartDescription> {
}

export const charts: IChartsList = {
    [ChartTypes.BAR_CHART]: {
        iD: ChartTypes.BAR_CHART,
        name: 'bar chart',
        image: barimg,
        imageBig: barbig,
        shortDescription: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
        description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae'
    },
    [ChartTypes.LINE_CHART]: {
        iD: ChartTypes.LINE_CHART,
        name: 'line chart',
        image: linepointimg,
        imageBig: linepointBig,
        shortDescription: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, illum quos repudiandae',
        description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae'
    },
    [ChartTypes.PIE_CHART]: {
        iD: ChartTypes.PIE_CHART,
        name: 'pie chart',
        image: pieimg,
        imageBig: pieBig,
        shortDescription: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
        description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae'
    },
    [ChartTypes.POINT_CHART]: {
        iD: ChartTypes.POINT_CHART,
        name: 'points chart',
        image: pointsimg,
        imageBig: pointsBig,
        shortDescription: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
        description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae'
    },
    [ChartTypes.AREA_CHART]: {
        iD: ChartTypes.AREA_CHART,
        name: 'area chart',
        image: areaimg,
        imageBig: areabig,
        shortDescription: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
        description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae'
    }
};
