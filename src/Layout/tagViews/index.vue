<template>
    <div class='tag-view'>
        <router-link 
            v-for='tag of tagViewList'
            :key='tag.name' 
            :to='{ path: tag.path }'
            class='tag-view-item'
            :class='[tag.name === tempName?&apos;active&apos;: &apos;&apos;]'
        >
            {{ tag.name }}
            <i
                v-if='!tag.meta.affix' 
                class='el-icon-close del-tagView'
                @click.prevent.self='closeSelectedTag(tag)'
            />
        </router-link>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
    name: 'TagViews',
    setup() {
        const route = useRoute()
        const router = useRouter()
        const store = useStore()
        const tempName = ref<string>('')
        const addTags = () => {
            tempName.value = route.name as string
            store.dispatch('addVisitedView', {
                name: route.name,
                path: route.path,
                meta: route.meta
            })
        }
        const initTags = () => {
            const tag = router.getRoutes().filter(ele => ele.meta.affix) || []
            tag.forEach(ele => {
                store.dispatch('addVisitedView', ele)
            })
        }
        const closeSelectedTag = (tag:RouteRecordRaw) => {
            store.dispatch('delVisitedView', tag)
        }
        onMounted(() => {
            initTags()
            addTags()
        })
        watch(() => route.fullPath, () => {
            addTags()
        })
        return {
            tagViewList: computed(() => store.state.tagViewList),
            tempName,
            closeSelectedTag
        }
    }
})
</script>
<style lang="scss" scoped>
.tag-view{
    width: 100%;
    height: 25px;
    padding: 0 20px;
    box-sizing: border-box;
    .tag-view-item{
        display: inline-block;
        height: 100%;
        text-align: center;
        line-height: 25px;
        border: 1px solid #f0f0f0;
        color: #495060;
        background: #fafafa;
        border-bottom: 0;
        box-sizing: border-box;
        padding: 0 10px;
        font-size: 12px;
        font-weight: bold;
        margin-right: 10px;
        cursor: pointer;
        .del-tagView {
            display: inline-block;
            padding: 5px;
            border-radius: 50%;
            margin-left: 6px;
        }
        .del-tagView:hover{
            background-color: #b4bccc;
            color: #fff;
        }
    }
    .tag-view-item.active{
        background-color: #fff;
        color: #1890ff;
    }
}
</style>
