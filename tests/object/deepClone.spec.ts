import { deepClone } from '@/index'

describe('deepClone - 深度复制对象', () => {
  test('深拷贝数组', () => {
    const source = [1, 2, 3]
    const target = deepClone(source)
    expect(source).not.toEqual(target)
    // expect(source).toEqual(target)
    source[1] = 0
    expect(source).not.toEqual(target)
  })

  test('拷贝json对象', () => {
    const source = {
      name: 'Bob',
      others: {
        sex: 1
      }
    }
    const target = deepClone(source)
    expect(source).not.toEqual(target)
    source.name = 'Jim'
    source.others.sex = 0
    expect(source).not.toEqual(target)
  })
})
