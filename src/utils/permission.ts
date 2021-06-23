import Layout from '@/Layout/index.vue'
import { RouteRecordRaw } from 'vue-router'
// const routers = []
export const filterAsyncRouter = (routers: RouteRecordRaw[]): Array<RouteRecordRaw> => { // 遍历后台传来的路由字符串，转换为组件对象
    if (routers == null) return []
    return routers.filter((router:any) => {
        if (router.component) {
            if (router.component === 'Layout') { // Layout组件特殊处理
                router.component = Layout
            } else {
                const { component } = router
                router.component = loadView(component)
            }
        }
        if (router.children && router.children.length) {
            router.children = filterAsyncRouter(router.children)
        }
        return true
    })
}
  
export const loadView = (view:string): any => {
    return () => import(/* webpackChunkName: "dynamic-route" */ `@/views/${view}.vue`)
}