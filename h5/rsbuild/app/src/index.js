import api from '@/api'
import App from '@/App.vue'
import pinia from '@/pinia'
import router from '@/router'
import * as message from '@hl/h5/src/utils/message'
import { storage } from '@muyianking/utils'
import dayjs from 'dayjs'
import { Lazyload } from 'vant'
import { createApp } from 'vue'
import { VuePageStackPlugin } from 'vue-page-stack'
import '@style/main.scss'
import '@style/util.scss'


// 全局属性
window.dayjs = dayjs
window.hl = {
  storage,
  api,
  message,
}

function initApp() {
  const app = createApp(App)
  app.use(Lazyload, {
    lazyComponent: true,
  })
    .use(pinia)
    .use(router)
    .use(VuePageStackPlugin, { router })
    .mount('#app')
}

initApp()
