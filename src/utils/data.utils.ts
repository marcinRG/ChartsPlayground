import {getTableWidth} from '../appContext/Data.provider.hoc';

export const enum dataStatus {
    OK='OK',
    ERROR = 'Error'
}

export interface IStatusData {
    status: string;
    data?: Array<Array<any>>;
    errorMsg?: string
}

export function transformInputData(array: any[]): IStatusData {
    if (isDataValid(array)) {
        return {
            status: dataStatus.OK,
            data: getData(array, ['x', 'y'])
        };
    }
    return {
        status: dataStatus.ERROR,
        data: [],
        errorMsg: 'Error occurred. Data table should not contain any blank fields'
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
