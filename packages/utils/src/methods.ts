import { customAlphabet } from "nanoid";

export const isArray = Array.isArray

export function useUniqueId(length?: number) {
    const id = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz')
    return length ? id(length) : id()
}

export const isObject = (target: unknown): target is object => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Object'
}

export function capitalizeFirstLetter(input: string): string {
    if (input.length === 0) {
        return input;
    }
    const firstLetter = input.charAt(0);
    const restOfString = input.slice(1);
    const capitalizedFirstLetter = firstLetter.toUpperCase();
    return capitalizedFirstLetter + restOfString;
}