/**
 * 获取菜单
 */
export async function getRouters() {
  if (!useUserStore().token) {
    return [
      {
        path: '/home',
        component: '/home/index',
        meta: {
          title: '首页',
          icon: 'material-symbols:home',
        },
      },
      {
        path: '/icon',
        component: '/icon/index',
        meta: {
          title: '图标',
          icon: 'logos:hugging-face-icon',
        },
      },
    ]
  }

  return []
}
