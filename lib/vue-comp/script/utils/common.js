import child_process from 'node:child_process'

export function exec(cmd) {
  return new Promise((resolve, reject) => {
    child_process.exec(cmd, (error) => {
      if (!error) {
        resolve('ok')
      } else {
        reject(error)
      }
    })
  })
}
