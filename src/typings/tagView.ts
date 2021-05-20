import { RouteRecordRaw } from 'vue-router'

export interface IGlobalData {
    tagViewList: Array<RouteRecordRaw>,
    routerMenu: Array<RouteRecordRaw>,
    routers: Array<RouteRecordRaw>,
    addRouters: Array<RouteRecordRaw>,
    isCollapse:boolean
}
