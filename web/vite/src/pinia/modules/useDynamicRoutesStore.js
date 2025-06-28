import { firstUpcase } from '@muyianking/utils'
import { getRouters } from '@server/resource'
import { cloneDeep } from 'lodash-es'
import { defineStore } from 'pinia'
import statisticRouter from "@/router/menu/statistic.router"

const modules = getAllComps()

export default defineStore('dynamicRouter', {
  state: () => ({
    // 动态路由
    list: [],
  }),
  actions: {
    // 初始化动态路由
    async initDynamicRoutes(router) {
      try {
        this.list = [
          ...statisticRouter,
          ...await getRouters(),
        ]

        const routes = filterAsyncRouter(cloneDeep(this.list))
        addRoutes(router, routes)
      } catch (e) {
        console.log(e.message)
      }
    },
    // 递归获取第一个子路由
    getFirstRoute() {
      if (!this.list || this.list.length === 0) {
        return null
      }

      function findFirstRoute(children) {
        const firstRoute = children[0]
        if (firstRoute.children && firstRoute.children.length > 0) {
          return findFirstRoute(firstRoute.children)
        }
        return firstRoute
      }

      return findFirstRoute(this.list)
    },
    clearData(router, list = null) {
      if (!list) {
        list = this.list
      }

      list.forEach((item) => {
        if (item.children && item.children.length > 0) {
          this.clearData(router, item.children)
        }

        if (router.hasRoute(item.name)) {
          router.removeRoute(item.name)
        }
      })
      this.$reset()
    },
  },
})

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap, type = false) {
  if (!asyncRouterMap) {
    return []
  }

  return asyncRouterMap.filter((route) => {
    if (type && route.children) {
      route.children = filterChildren(route.children)
    }
    if (route.path && !route.is_frame) {
      route.path = route.path.startsWith('/') ? route.path : `/${route.path}`
    }
    if (route.component || route.path) {
      route.name = route.path.replace(/-/g, '/').split('/').filter(item => item).map(item => firstUpcase(item)).join('')
      route.component = loadView(route)
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, type)
      route.redirect = route.children[0].path
    } else {
      delete route.children
      delete route.redirect
    }

    if (route.is_frame === 1) {
      route.path = `/iframe__${route.resources_id}`
      route.component = loadView(route)
    }

    return true
  })
}

function filterChildren(childrenMap, lastRouter = false) {
  let children = []
  childrenMap.forEach((el) => {
    if (el.children && el.children.length) {
      if (el.component === 'ParentView' && !lastRouter) {
        el.children.forEach((c) => {
          c.path = `${el.path}/${c.path}`
          if (c.children && c.children.length) {
            children = children.concat(filterChildren(c.children, c))
            return
          }
          children.push(c)
        })
        return
      }
    }
    if (lastRouter) {
      el.path = `${lastRouter.path}/${el.path}`
      if (el.children && el.children.length) {
        children = children.concat(filterChildren(el.children, el))
        return
      }
    }
    children = children.concat(el)
  })
  return children
}

/**
 * 根据comp_path返回对应的组件构造方法
 * @param route
 */
function loadView(route) {
  let comp = route.component

  // 是按需加载的组件的方法
  if (typeof comp === 'function') {
    return comp
  }

  if (route.is_frame === 1) {
    comp = 'outer-iframe/IframeTemplate'
  }

  if (!comp) {
    comp = route.path
  }

  // 统一在最前面加上/
  if (!comp.startsWith('/')) {
    comp = `/${comp}`
  }

  let res = null
  for (const path in modules) {
    if (path === comp.toLowerCase()) {
      res = modules[path]
      break
    }
  }

  return res
}

function addRoutes(router, list) {
  list.forEach((item) => {
    if (item.children && item.children.length) {
      addRoutes(router, item.children)
    } else {
      item.meta = item.meta || {}
      item.meta.params = parseParams(item.params)
      router.addRoute('admin', item)
    }
  })
}

function parseParams(str) {
  const params = {}
  str && str.replace('?', '').split('&').forEach((p) => {
    p = p.split('=')
    if (p.length === 2) {
      params[p[0]] = p[1]
    }
  })

  return params
}

// 获取views下所有组件
function getAllComps() {
  const routeComp = {}
  const modules = import.meta.glob('@views/**/Index.vue')
  for (const path in modules) {
    let key = path.replace("/src/views", "").replace(".vue", "").toLowerCase()
    routeComp[key] = modules[path]
  }

  return routeComp
}
