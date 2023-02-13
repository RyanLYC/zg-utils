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



## 备注 自动生成声明文件 的缺点，未知修复方法

build": "npm run clean:dist && npm run lint && rollup -c rollup.config.js && npx tsc -b tsconfig.types.json",

1. 其中 npx tsc -b tsconfig.types.json 可以生成声明文件
2. package.json 中 "types": "dist/types/index.d.ts", 修改
3. ObjectTypes 类型引用需要修改下，import { ObjectTypes } from '../types/index'
4. 使用项目的tsconfig中types中添加"zg-utils/dist/types"

import ZgUtils from 'zg-utils'
ZgUtils.getUrlParams('https://examples.com/base/path?name=Bob&age=24&sex=0')
使用上代码提示没有中文描述

import { getUrlParams } from 'zg-utils' 有中文描述信息









