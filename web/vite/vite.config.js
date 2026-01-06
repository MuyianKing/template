import { MuUiResolver } from '@muyianking/ui/resolver'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

import useAlias from './alias.config'

const { alias_map } = useAlias()

export default defineConfig({
  plugins:
    [
      vue(),
      UnoCSS(),
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

    ],
  resolve: {
    alias: alias_map,
  },
})
