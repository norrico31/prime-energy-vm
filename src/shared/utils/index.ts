export const firstLetterCapitalize = (str: string) => str[0].toUpperCase() + str.slice(1)

export function dedupArr<T>(arr: T[]): T[] {
    return [...new Set(arr)]
}