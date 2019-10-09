export function func(x: number): string {
    return x + '';
}

export const func2 = (x: number, y: number): string => {
    const sum = x + y;
    return <string>(sum + '');
};
