import variables from '@style/theme.module.scss'
import dayjs from 'dayjs'
import { createApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/pinia'
import router from '@/router'
import useEcharts from '../src/utils/echarts'
import 'uno.css'

useEcharts()

// 全局属性
window.dayjs = dayjs
window.THEME_VARIABLES = { ...variables }

const app = createApp(App)

app.use(pinia)

useDynamicRoutesStore().initDynamicRoutes(router).finally(() => {
  app
    .use(router)
    .mount('#app')

  const theme = useThemeStore()
  theme.initTheme()
})
