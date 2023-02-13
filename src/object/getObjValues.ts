/**
 * @description 根据keys数组获取对象的values
 * @param obj 对象
 * @param keys key数组
 * @returns 对应的值数组
 */
function getObjValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key])
}

export default getObjValues
