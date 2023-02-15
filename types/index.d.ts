export interface ObjectTypes<T = any> {
  [key: string]: T
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
export declare function removeRepeat<T>(array: T[], key?: string): T[]

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

export interface RegexpCollection {
  readonly ua: string
  readonly isUrlReg: RegExp
  readonly isPhoneNumberReg: RegExp
  readonly isEmailReg: RegExp
  readonly isIDCardReg: RegExp
  readonly isZipCodeReg: RegExp
  readonly isIEReg: RegExp
  readonly isChromeReg: RegExp
  readonly isFirefoxReg: RegExp
  readonly isOperaReg: RegExp
  readonly isSafariReg: RegExp
  readonly isEdgeReg: RegExp
  readonly isAndroidReg: RegExp
  readonly isIPhoneReg: RegExp
  readonly isIPadReg: RegExp
  readonly isMacOSReg: RegExp
  readonly isWindowsReg: RegExp
  readonly isLinuxReg: RegExp
  readonly isWeChatReg: RegExp
  /**
   * @description 判断字符串是否为url
   * @param url 目标字符串
   * @returns 是否为url
   */
  isUrl(url: string): boolean
  /**
   * @description 判断是否为手机号
   * @param phone 目标字符串
   * @returns 是否为手机号
   */
  isPhoneNumber(phone: string): boolean
  /**
   * @description 判断是否为邮箱地址
   * @param email 目标字符串
   * @returns 是否为邮箱地址
   */
  isEmail(email: string): boolean
  /**
   * @description 判断是否为身份证号码
   * @param num 目标字符串
   * @returns 是否为身份证号
   */
  isIDCard(idCardNum: string): boolean
  /**
   * @description 判断是否为邮政编码
   * @param zipCode 目标字符串
   * @returns 是否为邮政编码
   */
  isZipCode(zipCode: string): boolean
  /**
   * @description 判断是否为IE浏览器
   * @returns {Boolean}
   */
  isIE(): boolean

  /**
   * @description 判断是否为Chrome浏览器
   * @returns {Boolean}
   */
  isChrome(): boolean
  /**
   * @description 判断是否为Firefox浏览器
   * @returns {Boolean}
   */
  isFirefox(): boolean
  /**
   * @description 判断是否为Opera浏览器
   * @returns {Boolean}
   */
  isOpera(): boolean
  /**
   * @description 判断是否为Safari浏览器
   * @returns {Boolean}
   */
  isSafari(): boolean
  /**
   * @description 判断是否为Edge浏览器
   * @returns {Boolean}
   */
  isEdge(): boolean
  /**
   * @description 判断是否为Android
   * @returns {Boolean}
   */
  isAndroid(): boolean
  /**
   * @description 判断是否为iPhone
   * @returns {Boolean}
   */
  isIPhone(): boolean
  /**
   * @description 判断是否为iPad
   * @returns {Boolean}
   */
  isIPad(): boolean
  /**
   * @description 判断是否为MacOS
   * @returns {Boolean}
   */
  isMacOS(): boolean
  /**
   * @description 判断是否为windows
   * @returns {Boolean}
   */
  isWindows(): boolean
  /**
   * @description 判断是否为Linux
   * @returns {Boolean}
   */
  isLinux(): boolean
  /**
   * @description 判断是否为微信环境
   * @returns {Boolean}
   */
  isWeChat(): boolean
}
