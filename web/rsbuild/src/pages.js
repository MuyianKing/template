// 引入api文件
const context = import.meta.webpackContext('./views', {
  // 是否搜索子目录
  recursive: true,
  regExp: /Index.vue$/,
})

const routeComp = {}
for (const key of context.keys()) {
  // 转换路径格式：'./index.vue' -> '/index'
  const normalizedPath = key.replace(/^\.\//, '').replace(/\.vue$/, '')

  // 特殊处理 index.vue
  const routePath = normalizedPath === 'index' ? '/' : `/${normalizedPath}`

  // 使用动态导入创建异步组件

  routeComp[routePath.toLowerCase()] = async () => context(key).default
}

console.log("routeComp",routeComp);


export default routeComp

// /**
//  * 定义所有路由path与组件的映射关系
//  * key：和统一用户定义的组件路径一致
//  * value: 动态引入组件方法
//  */
// export default {
//   '/home/index': () => import('@views/home/Index.vue'),
// }
