/**
 * 判断内容是否溢出
 * @param {Dom} el
 */
export function isOverflow(el: HTMLElement) {
  return el.clientWidth < el.scrollWidth
    || el.clientHeight < el.scrollHeight
}
