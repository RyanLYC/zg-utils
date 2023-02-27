import _ = require('./index')
declare module './index' {
  /**
   * @description 判断空对象
   * @param source 目标对象
   * @param strict 是否严格模式，默认值false (设置为，true: 空数组和空字面量对象【不】判定为empty；false：空数组和空字面量对象判定为empty)
   * @returns {Boolean}
   */
  export declare const isEmpty: (source: any, strict?: boolean) => boolean

  /**
   * @description 根据keys数组获取对象的values
   * @param obj 对象
   * @param keys key数组
   * @returns 对应的值数组
   */
  export declare function getObjValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][]

  /**
   * @description 深拷贝
   * @param obj  被拷贝的对象 [key: string]: (T = any)
   * @returns [key: string]: (T = any)
   */
  export declare function deepClone(obj: _.ObjectTypes): _.ObjectTypes
}
