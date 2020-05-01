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
