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
declare module './index' {
  export declare const regCollections: RegexpCollection
}
