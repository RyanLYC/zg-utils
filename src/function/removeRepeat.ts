/**
 * @description 数组去重,对象数据根据某个key值去重
 * @param array T类型的数组
 * @param key Number、String数组不传，对象数组必填，判断重复的key值
 * @returns T类型的数组
 */
function removeRepeat<T>(array: T[], key = ''): T[] {
  if (key !== '') {
    const hash = {}
    return array.reduce((result: T[], currentValue) => {
      // 如果当前元素的key值没有在hash对象里，则可放入最终结果数组
      if (!hash[currentValue[key]]) {
        // 把当前元素key值添加到hash对象
        hash[currentValue[key]] = true
        // 把当前元素放入结果数组
        result.push(currentValue)
      }
      return result // 返回结果数组
    }, [])
  }
  // return array.filter((item, index) => array.indexOf(item) === index)
  return Array.from(new Set(array))
}

export default removeRepeat
