import { getObjValues } from '@/index'

describe('getObjValues - 获取对象的Values', () => {
  const obj = { a: 1, b: '0', c: 2, d: 3 }

  test('getObjValues', () => {
    expect(getObjValues(obj, ['a', 'b'])).toEqual([1, '0'])
  })

  /**能将类型“"bb"”分配给类型“"a" | "b" | "c" | "d"”。ts */
  // test('String 类型数组去重', () => {
  //   expect(getObjValues(obj, ['aa', 'bb'])).toEqual(['0', '14'])
  // })
})
