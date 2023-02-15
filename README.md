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
- [deepClone](src/object/deepClone.ts)&emsp; 深拷贝

### Url
- [getUrlParams](src/url/getUrlParams.ts)&emsp; 获取url上的query参数

### Regexp
- [RegCollections](src/regexp/index.ts)&emsp; 常用正则判断函数
  - .isUrl(url)&emsp; 判段目标字符串是否为url
  - .isPhoneNumber(phoneNumber)&emsp; 判段目标字符串是否为手机号
  - .isEmail(email)&emsp; 判段目标字符串是否为邮箱
  - .isIDCard(IDCard)&emsp; 判段目标字符串是否为身份证号码
  - .isZipCode(zipCode)&emsp; 判段目标字符串是否为邮政编码
  - .isIE()&emsp; 判段是否为IE
  - .isChrome()&emsp; 判段是否为Chrome
  - .isFirefox()&emsp; 判段是否为Firefox
  - .isOpera()&emsp; 判段是否为Opera
  - .isSafari()&emsp; 判段是否为Safari
  - .isEdge()&emsp; 判段是否为Edge
  - .isAndroid()&emsp; 判段是否为Android
  - .isIPhone()&emsp;判段是否为iPhone
  - .isIPad()&emsp; 判段是否为iPad
  - .isMacOS()&emsp; 判段是否为MacOS
  - .isWindows()&emsp; 判段是否为Windows
  - .isLinux()&emsp; 判段是否为Linux
  - .isWeChat()&emsp; 判段是否为微信环境



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









