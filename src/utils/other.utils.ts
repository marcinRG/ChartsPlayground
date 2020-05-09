import {IChartDescription, IChartsList} from '../data/charts.data';
import {IHomePageContent, IPageSection} from '../data/staticContent.data';

export interface  IObjectCollection<T> {
    [key:string]: T;
}

export function getElementClass(check: boolean, className: string, classAdditionalText: string): string {
    if (check) {
        return `${className} ${classAdditionalText}`;
    }
    return className;
}

export function getSafeString(str: string) {
    const regex: RegExp = /%/gm;
    return str.replace(regex, '@_@');
}

export function getUnsafeString(str: string) {
    const regex: RegExp = /@_@/gm;
    return str.replace(regex, '%');
}

export function randomInt(min: number, max: number) {
    return min + Math.floor((max - min) * Math.random());
}

export function getValuesFromCollection<T>(object: {[key: string ]: T}): T[] {
    return Object.values(object);
}

export function getCharts(collection: IChartsList): IChartDescription[] {
    return getValuesFromCollection<IChartDescription>(collection);
}
