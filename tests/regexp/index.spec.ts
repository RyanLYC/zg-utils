import { regCollections } from '@/index'

describe('常用正则表达式判断函数', () => {
  test('是否为url', () => {
    const str = 'https://www.baidu.com?id=123'
    expect(regCollections.isUrlReg.test(str)).toBe(true)
    expect(regCollections.isUrl(str)).toBe(true)
  })

  test('是否为邮箱', () => {
    const str = '656040874@qq.com'
    expect(regCollections.isEmailReg.test(str)).toBe(true)
    expect(regCollections.isEmail(str)).toBe(true)
  })

  test('是否为手机号', () => {
    const str = '13800138000'
    expect(regCollections.isPhoneNumberReg.test(str)).toBe(true)
    expect(regCollections.isPhoneNumber(str)).toBe(true)
  })

  test('是否为邮政编码', () => {
    const str = '511006'
    expect(regCollections.isZipCodeReg.test(str)).toBe(true)
    expect(regCollections.isZipCode(str)).toBe(true)
  })
})
