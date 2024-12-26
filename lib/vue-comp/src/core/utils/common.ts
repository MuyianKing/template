/**
 * 将传入的字符串或数字转成可以直接使用到设置元素宽度是值
 * @param {string | number} str
 */
export function getCanUseValue(str: string | number): string {
  // 不是数字直接返回
  if (Number.isNaN(+str)) {
    return str as string
  }
  // 数字添加px
  return str ? `${str}px` : ''
}
