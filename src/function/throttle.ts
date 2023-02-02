/**
 * @description 节流函数
 * @param fn 要节流的方法
 * @param wait 节流间隔时间(毫秒)
 */
function throttle (fn: Function, wait: number): Function {
  let previous = 0
  return function (...args: any[]) {
    const context: any = this || null
    const now = Date.now()
    if (now - previous > wait) {
      fn.apply(context, args)
      previous = now
    }
  }
}

export default throttle
