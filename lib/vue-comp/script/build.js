import { constants, copyFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fsExtra from 'fs-extra'
import { exec } from './utils/common.js'
import { getObjectFromJson } from './utils/file.js'

const __dirname = fileURLToPath(import.meta.url)

// 打包输出路径
const outputDir = path.resolve(__dirname, '../../dist')

async function buildLib() {
  // rslib打包
  await exec('vite build')

  // 拷贝READMER.md
  const package_path = path.resolve(__dirname, `../../README.md`)
  copyFileSync(package_path, path.resolve(outputDir, `README.md`), constants.COPYFILE_EXCL)

  // 生成package.json
  const package_json = getObjectFromJson(path.resolve(__dirname, `../../package.json`))
  const new_package = {}
      ;[
    'name',
    'type',
    'version',
    'exports',
    'main',
    'module',
    'types',
    'dependencies',
    'publishConfig',
  ].forEach((key) => {
    new_package[key] = package_json[key]
  })

  fsExtra.outputFile(
    path.resolve(outputDir, `package.json`),
    JSON.stringify(new_package, '', '\t'),
    'utf-8',
  )
}

buildLib()
