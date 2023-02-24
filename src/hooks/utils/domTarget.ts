import { isRef } from 'vue'
import type { Ref } from 'vue'
import isBrowser from './isBrowser'

type TargetValue<T> = T | undefined | null

type TargetType = HTMLElement | Element | Window | Document

export type BasicTarget<T extends TargetType = Element> = (() => TargetValue<T>) | TargetValue<T> | Ref<TargetValue<T>>

/**
 * 返回Dom对象实例
 * @param target 类型是T 或者 函数返回的<T> or  Ref<T> 对象;T extends HTMLElement | Element | Window | Document = = Element
 * @param defaultElement !target 返回的 对象实例
 * @returns
 */
export function getTargetElement<T extends TargetType>(target: BasicTarget<T>, defaultElement?: T) {
  if (!isBrowser) {
    return undefined
  }

  if (!target) {
    return defaultElement
  }

  let targetElement: TargetValue<T>
  if (typeof target === 'function') {
    targetElement = target()
  } else if (isRef(target)) {
    targetElement = target.value
  } else {
    targetElement = target
  }
  return targetElement
}
