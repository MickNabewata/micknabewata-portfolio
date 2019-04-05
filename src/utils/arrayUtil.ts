/** 配列同士の重複確認 */
export function isDuplicate<T>(arr1 : Array<T>, arr2 : Array<T>) : boolean {
    return [...arr1, ...arr2].filter(item => arr1.includes(item) && arr2.includes(item)).length > 0
}