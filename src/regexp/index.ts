import { RegexpCollection } from '../../types/regexp'
class RegCollections implements RegexpCollection {
  readonly ua = navigator.userAgent
  // url地址
  readonly isUrlReg =
    /((((https?|ftp?):(?:\/\/)?)(?:[-;:&=\+\$]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\?\+=&;:%!\/@.\w_]*)#?(?:[-\+=&;%!\?\/@.\w_]*))?)/i
  // 手机号
  readonly isPhoneNumberReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
  // 邮箱地址
  readonly isEmailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
  // 身份证号
  readonly isIDCardReg =
    /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
  // 邮编
  readonly isZipCodeReg = /^[1-9]\d{5}(?!\d)$/
  // IE
  readonly isIEReg = /msie (\d+\.\d+)/i
  // chrome
  readonly isChromeReg = /chrome\/(\d+\.\d+)/i
  // firefox
  readonly isFirefoxReg = /firefox\/(\d+\.\d+)/i
  // opera
  readonly isOperaReg = /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i
  // safari
  readonly isSafariReg = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i
  // edge
  readonly isEdgeReg = /edge\/([\d.]+)/i
  // android
  readonly isAndroidReg = /android/i
  // iPhone
  readonly isIPhoneReg = /iphone/i
  // iPad
  readonly isIPadReg = /ipad/i
  // macOS
  readonly isMacOSReg = /macintosh/i
  // windows
  readonly isWindowsReg = /windows/i
  // linux
  readonly isLinuxReg = /linux/i
  // weChat
  readonly isWeChatReg = /micromessenger/i
  /**
   * @description 判断字符串是否为url
   * @param url 目标字符串
   * @returns 是否为url
   */
  isUrl(url: string): boolean {
    return this.isUrlReg.test(url)
  }
  /**
   * @description 判断是否为手机号
   * @param phone 目标字符串
   * @returns 是否为手机号
   */
  isPhoneNumber(phone: string): boolean {
    return this.isPhoneNumberReg.test(phone)
  }
  /**
   * @description 判断是否为邮箱地址
   * @param email 目标字符串
   * @returns 是否为邮箱地址
   */
  isEmail(email: string): boolean {
    return this.isEmailReg.test(email)
  }
  /**
   * @description 判断是否为身份证号码
   * @param num 目标字符串
   * @returns 是否为身份证号
   */
  isIDCard(idCardNum: string): boolean {
    return this.isIDCardReg.test(idCardNum)
  }
  /**
   * @description 判断是否为邮政编码
   * @param zipCode 目标字符串
   * @returns 是否为邮政编码
   */
  isZipCode(zipCode: string): boolean {
    return this.isZipCodeReg.test(zipCode)
  }
  /**
   * @description 判断是否为IE浏览器
   * @returns {Boolean}
   */
  isIE(): boolean {
    return this.isIEReg.test(this.ua)
  }
  /**
   * @description 判断是否为Chrome浏览器
   * @returns {Boolean}
   */
  isChrome(): boolean {
    return this.isChromeReg.test(this.ua)
  }
  /**
   * @description 判断是否为Firefox浏览器
   * @returns {Boolean}
   */
  isFirefox(): boolean {
    return this.isFirefoxReg.test(this.ua)
  }
  /**
   * @description 判断是否为Opera浏览器
   * @returns {Boolean}
   */
  isOpera(): boolean {
    return this.isOperaReg.test(this.ua)
  }
  /**
   * @description 判断是否为Safari浏览器
   * @returns {Boolean}
   */
  isSafari(): boolean {
    return this.isSafariReg.test(this.ua)
  }
  /**
   * @description 判断是否为Edge浏览器
   * @returns {Boolean}
   */
  isEdge(): boolean {
    return this.isEdgeReg.test(this.ua)
  }
  /**
   * @description 判断是否为Android
   * @returns {Boolean}
   */
  isAndroid(): boolean {
    return this.isAndroidReg.test(this.ua)
  }
  /**
   * @description 判断是否为iPhone
   * @returns {Boolean}
   */
  isIPhone(): boolean {
    return this.isIPhoneReg.test(this.ua)
  }
  /**
   * @description 判断是否为iPad
   * @returns {Boolean}
   */
  isIPad(): boolean {
    return this.isIPadReg.test(this.ua)
  }
  /**
   * @description 判断是否为MacOS
   * @returns {Boolean}
   */
  isMacOS(): boolean {
    return this.isMacOSReg.test(this.ua)
  }
  /**
   * @description 判断是否为windows
   * @returns {Boolean}
   */
  isWindows(): boolean {
    return this.isWindowsReg.test(this.ua)
  }
  /**
   * @description 判断是否为Linux
   * @returns {Boolean}
   */
  isLinux(): boolean {
    return this.isLinuxReg.test(this.ua)
  }
  /**
   * @description 判断是否为微信环境
   * @returns {Boolean}
   */
  isWeChat(): boolean {
    return this.isWeChatReg.test(this.ua)
  }
}

export default new RegCollections()
