import {Weight} from "./Indicator";

function clone<T>(array: T[]): T[] {
    const result: T[] = [];
    array.forEach(val => result.push(Object.assign({}, val)));
    return result;
}

export { clone }