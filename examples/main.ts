import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'

import { useUpdater } from '../src/index'

/** 测试方式 yarn dev
 * cmd 进入 example 目录 执行 http-server 启动服务
 * rollup.dev.config 输出修改为 bundle1.js
 * */
useUpdater(
  () => {
    console.log('update')
  },
  () => {
    console.log('no-update')
  },
  5000
)

const app = createApp(App)

app.mount('#app')
