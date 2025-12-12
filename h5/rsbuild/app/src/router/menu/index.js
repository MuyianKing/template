import tabs from './tabbar'

/**
 * 路由配置
 * @type {import('vue-router').RouteRecordRaw[]}
 */
export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: () => import('@views/login/Index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/home',
    component: () => import('@views/home/Index.vue'),
    meta: {
      title: '首页',
    },
  },
  tabs,
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@views/404.vue'),
  },
]
