export interface ObjectTypes<T = any> {
  [propsName: string]: T
}

/**
 * @description 获取url中的query参数
 * @param url 目标地址，默认：当前地址栏url
 * @param name 要获取的参数名称, 非必传
 * @returns 返回值，如果name不为空则返回name的值，否则返回一个包含所有参数键值对的对象
 */
export declare const getUrlParams: (url: string, name?: string) => string | ObjectTypes<string>

/**
 * @description 函数防抖
 * @param fn 要防抖的方法
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export declare function debounce(fn: Function, wait: number, immediate?: boolean): Function

/**
 * @description 节流函数
 * @param fn 要节流的方法
 * @param wait 节流间隔时间(毫秒)
 */
export declare function throttle(fn: Function, wait: number): Function

/**
 * @description 数组去重,对象数据根据某个key值去重
 * @param array T类型的数组
 * @param key Number、String数组不传，对象数组必填，判断重复的key值
 * @returns T类型的数组
 */
export declare function removeRepeat<T>(array: T[], key = ''): T[]
