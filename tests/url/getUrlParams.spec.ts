import { getUrlParams } from '@/index'

describe('getUrlParams - 获取url中的query参数', () => {
  const source = 'https://examples.com/base/path?name=Bob&age=24&sex=0'
  test('获取单个参数', () => {
    const name = getUrlParams(source, 'name')
    expect(name).toBe('Bob')
  })

  test('获取所有参数', () => {
    const query = getUrlParams(source)
    expect(query).toEqual({
      name: 'Bob',
      age: '24',
      sex: '0'
    })
  })
})
