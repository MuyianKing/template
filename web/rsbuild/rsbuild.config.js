import process from 'node:process'
import { MuUiResolver } from '@muyianking/ui/resolver'
import { defineConfig, loadEnv } from '@rsbuild/core'
import { pluginImageCompress } from '@rsbuild/plugin-image-compress'
import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginVue } from '@rsbuild/plugin-vue'
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin'
import AutoImport from 'unplugin-auto-import/rspack'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/rspack'

import useAlias from './alias.config'

const { alias_map } = useAlias()
const { publicVars } = loadEnv({ prefixes: ['VITE_'] })

export default defineConfig({
  html: {
    template: './public/index.html',
    title: publicVars['import.meta.env.VITE_WEB_NAME'].replace(/"/g, ''),
  },
  plugins: [
    pluginVue(),
    pluginSass(),
    pluginImageCompress(),
  ],
  tools: {
    rspack: {
      plugins: [
        Components({
          dts: true,
          directoryAsNamespace: true,
          resolvers: [
            ElementPlusResolver({
              importStyle: 'sass',
            }),
            MuUiResolver(),
          ],
        }),
        AutoImport({
          resolvers: [ElementPlusResolver()],
          imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
          eslintrc: {
            enabled: true,
          },
          dirs: ['./src/pinia/modules'],
          dts: true,
        }),
        process.env.RSDOCTOR === 'true'
        && new RsdoctorRspackPlugin({
          // 插件选项
        }),
      ],
    },
  },
  resolve: {
    alias: alias_map,
  },
  source: {
    define: publicVars,
  },
  output: {
    polyfill: 'entry',
    legalComments: 'none',
    sourceMap: {
      js: false,
    },
  },
  performance: {
    // chunkSplit: {
    //   strategy: 'split-by-size',
    //   minSize: 30000,
    //   maxSize: 50000,
    // },
  },
  dev: {},
})
