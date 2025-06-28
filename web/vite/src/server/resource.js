/**
 * 获取菜单
 */
export async function getRouters() {
  if (!useUserStore().token) {
    return []
  }

  return []
}
