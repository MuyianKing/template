export default [
  {
    path: '/home',
    component: () => import('@views/home/Index.vue'),
    meta: {
      title: '首页',
      icon: 'material-symbols:home',
    },
  },
  {
    path: '/icon',
    component: () => import('@views/icon/Index.vue'),
    meta: {
      title: '图标',
      icon: 'logos:hugging-face-icon',
    },
  },
]
