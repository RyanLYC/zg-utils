import { noop } from 'types'

/**
 * 比较index.html的script标签是否改变了，改变了就update否则no-update
 * @param updateCallBack  update callback function
 * @param noUpdateCallBack no update callback function
 * @param time 轮询的时间 默认 4000
 * @param loop update了是否继续轮询 默认 false
 */
const useUpdater = (updateCallBack: noop, noUpdateCallBack: noop | null = null, time = 4000, loop = false) => {
  let oldScripts: string[] = [] // 旧的script标签数组
  let newScripts: string[] = [] // 新的script标签数组
  let timer = NaN

  /** script标签数组 */
  const getScripts = async () => {
    // 获取取index html
    const html = await fetch('/').then((res) => res.text())
    // script正则
    const reg = new RegExp(/<script(?:\s+[^>]*)?>(.*?)<\/script\s*>/gi)
    return html.match(reg) as string[]
  }

  const compare = (oldArr: string[], newArr: string[]) => {
    if (oldArr.length !== newArr.length) {
      updateCallBack()
    } else if (newArr.join() === oldArr.join()) {
      noUpdateCallBack && noUpdateCallBack()
    } else {
      if (!loop) {
        clearInterval(timer)
      }
      updateCallBack()
    }
  }

  const init = async () => {
    oldScripts = await getScripts()
  }

  init()

  timer = setInterval(async () => {
    newScripts = await getScripts()
    compare(oldScripts, newScripts)
  }, time)
}

export default useUpdater
