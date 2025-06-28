import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@muyianking/config/eslint.config.js'

const compat = new FlatCompat()

export default antfu({
  formatters: true,
  ignores: ['**/public/**'],
}, {
  rules: eslint,
  files: ['**/src/**'],
  languageOptions: {
    globals: {
      dayjs: true,
    },
  },
}, ...compat.config({
  extends: [
    './.eslintrc-auto-import.json',
  ],
}))
