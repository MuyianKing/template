import { readFileSync } from 'node:fs'

/**
 * 读取json文件转换为对象
 * @param {string} path
 * @returns object
 */
export function getObjectFromJson(path) {
  const data = readFileSync(path)
  return JSON.parse(data)
}
