export default [
  {
    path: '/home',
    component: () => import('@views/home/Index.vue'),
    meta: {
      title: '首页',
      icon: 'material-symbols:home',
    },
  },
]
