import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import fsExtra from 'fs-extra'
import ora from 'ora'
import { exec } from './utils/common.js'
import { getObjectFromJson } from './utils/file.js'

const __dirname = fileURLToPath(import.meta.url)

function showLog(instance, text) {
  instance.text = text
  instance.start()
}

async function build() {
  const spinner = ora(`update package.json`).start()
  const package_path = path.resolve(__dirname, '../../package.json')
  const _config = getObjectFromJson(package_path)

  let version = `v${_config.version}`
  const params = getParams()

  // 如果外部传入版本号则以外部为准
  if (params.v) {
    version = `v${params.v}`
    _config.version = params.v

    fsExtra.outputFile(
      package_path,
      JSON.stringify(_config, '', '\t'),
      'utf-8',
    )
  }
  spinner.succeed('update package.json successfully')

  try {
    spinner.succeed('create package.json')
    showLog(spinner, 'create log')
    await exec('pnpm log')
    spinner.succeed('create log')
    showLog(spinner, 'git add .')
    await exec('git add .')
    spinner.succeed('git add .')
    showLog(spinner, 'git commit')
    await exec(`git commit -m"release: :package: ${version}"`)
    spinner.succeed('git commit')
    showLog(spinner, 'git push && git tag && git push')
    await exec(`git push && git tag ${version} && git push origin ${version}`)
    spinner.succeed('git push && git tag && git push')
    spinner.succeed('publish successful, waiting for GitHub to automatically Release it to npm')
  } catch (error) {
    spinner.fail('spinner')
    console.log(error)
  }
}

// 获取参数
function getParams() {
  const params = {}
  process.argv.forEach((item) => {
    item = item.split('=')

    if (item.length === 2) {
      params[item[0]] = item[1]
    }
  })

  return params
}

build()
