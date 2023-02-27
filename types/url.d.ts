import _ = require('./index')
declare module './index' {
  /**
   * @description 获取url中的query参数
   * @param url 目标地址，默认：当前地址栏url
   * @param name 要获取的参数名称, 非必传
   * @returns 返回值，如果name不为空则返回name的值，否则返回一个包含所有参数键值对的对象
   */
  export declare const getUrlParams: (url: string, name?: string) => string | _.ObjectTypes<string>
}
