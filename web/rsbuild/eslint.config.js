import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@muyianking/config/eslint.config.js'

const compat = new FlatCompat()

export default antfu({
  formatters: true,
  ignores: ['**/public/**'],
}, {
  rules: eslint,
  languageOptions: {
    globals: {
      hl: true,
      dayjs: true,
    },
  },
}, ...compat.config({
  extends: [
    './.eslintrc-auto-import.json',
  ],
}))
