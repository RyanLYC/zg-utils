# zg-utils

前端通用工具函数库


## 安装
```bash
  npm install --save zg-utils
  # or
  yarn add zg-utils
```
## 使用
```bash
  # 完整导入
  import ZgUtils from 'zg-utils'

  ZgUtils.getUrlParams('https://examples.com/base/path?name=Bob&age=24&sex=0')
  # or

  # 模块导入
  import { getUrlParams } from 'zg-utils'

   ZgUtils.getUrlParams('https://examples.com/base/path?name=Bob&age=24&sex=0')
```

## API文档

### Function
- [debounce](src/function/debounce.ts)&emsp; 防抖函数
- [throttle](src/function/throttle.ts)&emsp; 节流函数
- [removeRepeat](src/function/removeRepeat.ts)&emsp; 数组去重

### Object
- [isEmpty](src/object/isEmpty.ts)&emsp; 空对象判断
- [getObjValues](src/object/getObjValues.ts)&emsp; 根据keys数组获取对象的values

### Url
- [getUrlParams](src/url/getUrlParams.ts)&emsp; 获取url上的query参数













