import { IGlobalData } from '@/typings/tagView'
import router, { routes } from '@/router/router'
import { RouteRecordRaw } from 'vue-router'

export default {
    SET_ROUTERS: (state:IGlobalData, routers:RouteRecordRaw):void => {
        state.addRouters = state.addRouters.concat(routers)
        state.routers = routes.concat(routers)
    },
    ADD_VISITED_VIEW(state: IGlobalData, item: RouteRecordRaw):void {
        if (!state.tagViewList.some((ele) => ele.name === item.name)) {
            state.tagViewList.push(item)
        }
    },
    DEl_TAG_VIEW(state: IGlobalData, item: RouteRecordRaw):void {
        const index = state.tagViewList.findIndex((v: { path:string }) => v.path === item.path)
        state.tagViewList.splice(index, 1)
        const i = index === state.tagViewList.length ? index - 1 : index
        router.push(state.tagViewList[i])
    },
    CHANGETOGGLE(state: IGlobalData):void {
        state.isCollapse = !state.isCollapse
    }
}