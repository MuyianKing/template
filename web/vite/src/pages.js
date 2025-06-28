const routeComp = {}
const modules = import.meta.glob('./views/*/*.vue')
for (const path in modules) {
  let key = path.replace("./views", "").replace(".vue", "").toLowerCase()
  routeComp[key] = modules[path]
}
export default routeComp
