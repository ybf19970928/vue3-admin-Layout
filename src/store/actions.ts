import { IGlobalData } from '@/typings/tagView'
import { RouteRecordRaw } from 'vue-router'
import { Commit } from 'vuex'
interface ICTX{
    commit: Commit,
    state: IGlobalData
}
export default {
    GenerateRoutes({ commit }:ICTX, asyncRoutes:RouteRecordRaw):void {
        commit('SET_ROUTERS', asyncRoutes)
    },
    addVisitedView({ commit }:ICTX, item: RouteRecordRaw):void {
        commit('ADD_VISITED_VIEW', item)
    },
    delVisitedView({ state, commit }:ICTX, item: RouteRecordRaw):Promise<any> {
        return new Promise(resolve => {
            commit('DEl_TAG_VIEW', item)
            resolve({ state })
        })
    },
    changetoggle({ commit }:ICTX):void {
        commit('CHANGETOGGLE')
    }
}