import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../Layout/index.vue'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '工作台',
        component: Layout,
        meta: { icon: 'el-icon-s-home' },
        redirect: { path: '/Home' },
        children: [
            {
                path: '/Home',
                name: '首页',
                meta: { icon: 'el-icon-s-home', affix: true },
                component: () => import('../views/home.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue'),
        meta: { icon: 'el-icon-connection', hidden: true }
    }
]
export const asyncRoutes: Array<RouteRecordRaw> = [
    {
        path: '/user',
        name: 'user',
        meta: { icon: 'el-icon-user' },
        component: Layout,
        children: [
            {
                path: '/user/userInfo',
                name: 'userInfo',
                meta: { icon: 'el-icon-message' },
                component: () => import('../views/UserInfo.vue')
            },
            { 
                path: '/user/userInfoName',
                name: 'userInfoName',
                meta: { icon: 'el-icon-info' },
                component: () => import('../views/userInfoName.vue'),
                children: [
                    {
                        path: '/user/userInfoNameuserChildName',
                        name: 'userChildName',
                        meta: { icon: 'el-icon-s-custom' },
                        component: () => import('../views/userChildName.vue')
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router
