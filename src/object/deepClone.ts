import { ObjectTypes } from 'types'
/**
 * @description 深拷贝
 * @param obj  被拷贝的对象 [key: string]: (T = any)
 * @returns [key: string]: (T = any)
 */
function deepClone(obj: ObjectTypes): ObjectTypes {
  if (typeof obj !== 'object') {
    return obj
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (obj instanceof Date) {
    return new Date(obj)
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cloneObj: ObjectTypes = new obj.constructor()

  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key])
    }
  }
  return cloneObj
}

export default deepClone
