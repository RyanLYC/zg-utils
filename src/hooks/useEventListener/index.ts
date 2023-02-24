/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
import { ref } from 'vue'
import { BasicTarget } from '../utils/domTarget'
import { getTargetElement } from '../utils/domTarget'
import useEffectWithTarget from '../utils/useEffectWithTarget'

type noop = (...p: any) => void

export type UseEventListenerTarget = BasicTarget<HTMLElement | Element | Window | Document>

type UseEventListenerOptions<T extends UseEventListenerTarget = UseEventListenerTarget> = {
  /**
   * DOM element or ref
   */
  target?: T

  /**
   * 一个布尔值，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。.
   */
  capture?: boolean

  /**
   *一个布尔值，表示 listener 在添加之后最多只调用一次。如果为 true，listener 会在其被调用之后自动移除。
   */
  once?: boolean

  /**
   * 一个布尔值，设置为 true 时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。查看使用 passive 改善滚屏性能以了解更多。
   */
  passive?: boolean
}

/**
 * @description target添加监听事件Hooks
 * @param eventName Event name
 * @param handler Callback function
 * @param options addEventListener第三个参数对象增加target:T
 */
function useEventListener<K extends keyof HTMLElementEventMap>(
  eventName: K,
  handler: (ev: HTMLElementEventMap[K]) => void,
  options?: UseEventListenerOptions<HTMLElement>
): void
function useEventListener<K extends keyof ElementEventMap>(
  eventName: K,
  handler: (ev: ElementEventMap[K]) => void,
  options?: UseEventListenerOptions<Element>
): void
function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (ev: DocumentEventMap[K]) => void,
  options?: UseEventListenerOptions<Document>
): void
function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (ev: WindowEventMap[K]) => void,
  options?: UseEventListenerOptions<Window>
): void
function useEventListener(eventName: string, handler: noop, options: UseEventListenerOptions): void

function useEventListener(eventName: string, handler: noop, options: UseEventListenerOptions = {}) {
  const handlerRef = ref(handler)

  useEffectWithTarget(
    () => {
      const targetElement = getTargetElement(options.target, window)
      if (!targetElement?.addEventListener) {
        return
      }
      const eventListener = (event: Event) => {
        return handlerRef.value(event)
      }

      targetElement.addEventListener(eventName, eventListener, {
        capture: options.capture,
        once: options.once,
        passive: options.passive
      })

      return () => {
        targetElement.removeEventListener(eventName, eventListener, {
          capture: options.capture
        })
      }
    },
    [eventName, options.capture, options.once, options.passive],
    options.target
  )
}

export default useEventListener
