import { onUnmounted, ref, watchEffect, WatchSource } from 'vue'
import depsAreSame, { DependencyList } from './depsAreSame'
import { getTargetElement } from './domTarget'
import { BasicTarget } from './domTarget'

export type EffectCallback = () => void

const useEffectWithTarget = (effect: EffectCallback, deps: WatchSource[] | any, target: BasicTarget<any> | BasicTarget<any>[]) => {
  const hasInitRef = ref(false)

  const lastElementRef = ref<(Element | null)[]>([])
  const lastDepsRef = ref<DependencyList>([])

  const unLoadRef = ref<any>()

  watchEffect(() => {
    const targets = Array.isArray(target) ? target : [target]
    const els = targets.map((item) => getTargetElement(item))

    // init run
    if (!hasInitRef.value) {
      hasInitRef.value = true
      lastElementRef.value = els
      lastDepsRef.value = deps

      unLoadRef.value = effect()
      return
    }

    if (els.length !== lastElementRef.value.length || !depsAreSame(els, lastElementRef.value) || !depsAreSame(deps, lastDepsRef.value)) {
      unLoadRef.value?.()
      lastElementRef.value = els
      lastDepsRef.value = deps
      unLoadRef.value = effect()
    }
  })

  onUnmounted(() => {
    unLoadRef.value?.()
    hasInitRef.value = false
  })
}

export default useEffectWithTarget
