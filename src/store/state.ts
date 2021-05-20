import { routes } from '@/router/router'
import { IGlobalData } from '@/typings/tagView'

const state: IGlobalData = {
    tagViewList: [],
    routerMenu: [],
    routers: routes,
    addRouters: [],
    isCollapse: false
}
export default state

