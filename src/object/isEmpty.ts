/**
 * @description 判断空对象
 * @param source 目标对象
 * @param strict 是否严格模式，默认值false (设置为，true: 空数组和空字面量对象【不】判定为empty；false：空数组和空字面量对象判定为empty)
 * @returns {Boolean}
 */
const isEmpty = (source: any, strict = false): boolean => {
  if (typeof source === 'object') {
    if (source === null) {
      return true
    }
    if (!strict) {
      if (Array.isArray(source)) {
        return source.length === 0
      } else {
        return Object.keys(source).length === 0
      }
    }
  } else if (typeof source === 'string' || typeof source === 'undefined') {
    return !source
  }
  return false
}

export default isEmpty
