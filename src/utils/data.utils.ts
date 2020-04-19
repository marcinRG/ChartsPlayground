import {getTableWidth} from '../appContext/Data.provider.hoc';

export function transformInputData(array: any[]): any {
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
    return results.sort((a: any, b: any) => {return a.x - b.x;});
}

export function isDataValid(array: any[]): boolean {
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

export function entryIsArray(data: any) {
    return (Array.isArray(data) && data.length > 0);
}
