import Layout from '@/Layout/index.vue'
// const routers = []
export const filterAsyncRouter = (routers: any) => { // 遍历后台传来的路由字符串，转换为组件对象
    if (routers == null) return false
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
  
export const loadView = (view:string) => {
    // return (resolve) => require([`@/views/${view}.vue`], resolve)
    return () => import(`@/views/${view}.vue`)
}