import { removeRepeat } from '@/index'

describe('removeRepeat - 数组去重', () => {
  const arrayNum = [0, 0, 14, 15, 14]
  const arrayStr = ['0', '0', '14', '15', '14']
  const arrayObject = [
    { id: 1, a: '0' },
    { id: 1, a: '0' },
    { id: 2, b: '14' },
    { id: 3, c: '15' },
    { id: 2, b: '14' }
  ]
  test('Number 类型数组去重', () => {
    expect(removeRepeat<number>(arrayNum)).toEqual([0, 14, 15])
  })

  test('String 类型数组去重', () => {
    expect(removeRepeat<string>(arrayStr)).toEqual(['0', '14', '15'])
  })

  test('Object 类型数组去重', () => {
    const resutArray = removeRepeat<{ id: number; a?: string; b?: string; c?: string }>(arrayObject, 'id')

    expect(resutArray).toEqual([
      { id: 1, a: '0' },
      { id: 2, b: '14' },
      { id: 3, c: '15' }
    ])
  })
})
