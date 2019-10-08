export interface ITableState {
    title: string;
    columnHeaders?: string[];
    rowHeaders?: string[];
    values?: any;
    selectedRow?: number;
    selectedColumn?: number;
}
