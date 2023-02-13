import { ObjectTypes } from './../../types/index'
// import { ObjectTypes } from '../types/index' 自动生成声明文件使用这个
/**
 * @description 获取url中的query参数
 * @param url 目标地址，默认：当前地址栏url
 * @param name 要获取的参数名称, 非必传
 * @returns 返回值，如果name不为空则返回name的值，否则返回一个包含所有参数键值对的对象
 */
const getUrlParams = (url: string = window.location.href, name?: string): string | ObjectTypes<string> => {
  const jsonMaps: ObjectTypes<string> = {}
  const queryString: string = url.split('?')[1]
  queryString.split('&').forEach((keyVal) => {
    const [key, value] = keyVal.split('=')
    jsonMaps[key] = decodeURIComponent(value)
  })
  if (name && jsonMaps[name]) {
    return jsonMaps[name]
  }
  return jsonMaps
}

export default getUrlParams
