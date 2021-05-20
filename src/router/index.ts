import router from './router'
import { getUserRouter } from '@/api/user'
import { filterAsyncRouter } from '@/utils/permission'
import store from '@/store/index'
import { RouteRecordRaw } from 'vue-router'

router.beforeEach(async(to,from,next) => {
    if (localStorage.getItem('token')) {
        if (to.path === '/login') {
            next({ path: '/' })
        }else if (store.state.addRouters.length === 0) {
            const res = await getUserRouter()
            // 动态路由
            const newRouters = filterAsyncRouter(res.data)
            // test asyncRoutes
            await store.dispatch('GenerateRoutes', newRouters)
            newRouters.forEach((route: RouteRecordRaw) => {
                const routeName: any = route.name
                if (!router.hasRoute(routeName)) {
                    router.addRoute(route)
                }
            })
            next({ ...to, replace:true })
        }else{
            next()
        }
    }else if (to.path === '/login') {
        next()
    }else{
        next('/login')
    }
})

