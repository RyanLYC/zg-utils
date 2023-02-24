<template>
  <div>
    <div ref="divRef" style="cursor: pointer">Click me!</div>
    <br />
    <div>click count：{{ valueRef }}</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useEventListener } from '../../src/index'

const divRef = ref<HTMLDivElement>()
const valueRef = ref(0)
onMounted(() => {
  useEventListener(
    'click',
    (event) => {
      valueRef.value += 1
    },
    { target: divRef }
  )
})
</script>
