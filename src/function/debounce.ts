/**
 * @description 函数防抖
 * @param fn 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce (fn: Function, wait: number, immediate = true): Function {
  let timeout: number | null

  return function (...args: any[]) {
    const context: any = this
    if (timeout) {
      clearTimeout(timeout)
    }

    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) {
        fn.apply(context, args)
      }
    } else {
      timeout = setTimeout(function () {
        fn.apply(context, args)
      }, wait)
    }
  }
}

export default debounce
