<template>
  <div class="page-bx">
    <h3>UseEventListener - Demo</h3>
    <UseEventListenerDemo />
    <UseEventListenerDemo1 />
    <h3>useMouse - Demo</h3>
    <useMouseDemo />
    <useMouseDemo1 />
  </div>
</template>
<script lang="ts" setup>
import { getUrlParams } from '../src/index'
import UseEventListenerDemo from './useEventListener/demo.vue'
import UseEventListenerDemo1 from './useEventListener/demo1.vue'
import useMouseDemo from './useMouse/demo.vue'
import useMouseDemo1 from './useMouse/demo1.vue'

console.log(getUrlParams('https://examples.com/base/path?name=Bob&age=24&sex=0'))
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.page-bx {
  width: 100%;
  height: 100vh;
}
</style>
