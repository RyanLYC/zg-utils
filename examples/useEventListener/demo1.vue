<template>
  <div>
    <div>Window size change：{{ valueRef }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useEventListener } from '../../src/index'

const valueRef = ref(0)

useEventListener('resize', (event) => {
  valueRef.value += 1
})
</script>
