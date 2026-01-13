export default [
  {
    path: '/home',
    component: () => import('@/views/home/Index.vue'),
    meta: {
      title: '首页',
      icon: 'MaterialSymbolsHome',
    },
  },
  {
    path: '/icon',
    component: () => import('@/views/icon/Index.vue'),
    meta: {
      title: '图标',
      icon: 'LogosHuggingFaceIcon',
    },
  },
]
