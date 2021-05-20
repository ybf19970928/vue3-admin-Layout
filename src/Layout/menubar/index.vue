<template>
    <el-menu 
        background-color='#304156'
        text-color='#ccc'
        unique-opened
        mode='vertical'
        class='el-menu-vertical'
        :collapse='isCollapse'
        :default-active='activeMenu'
    >
        <menu-bar
            v-for='item of treeRoute'
            :key='item.name'
            :item='item'
        />
    </el-menu>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import menuBar from './menubarItem.vue'
export default defineComponent({
    name: 'Sidebar',
    components: { menuBar },
    setup() {
        const route = useRouter()
        const store = useStore()
        return {
            isCollapse: computed(() => store.state.isCollapse),
            treeRoute: computed(() => store.state.routers),
            activeMenu: computed(() => route.currentRoute.value.name)
        }
    }
})
</script>
<style scoped lang="scss">
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }
</style>