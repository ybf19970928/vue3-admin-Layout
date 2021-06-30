<template>
    <el-submenu
        v-if='!item.meta.hidden'
        :index='item.name'
    >
        <template #title>
            <i :class='item.meta.icon' />
            <span>{{ item.name }}</span>
        </template>
        <template v-for='c of item.children'>
            <router-link
                v-if='!c.children'
                :key='c.name'
                :to='{ name: c.name}'
            >
                <el-menu-item :index='c.name'>
                    <i :class='c.meta.icon' />
                    <span>{{ c.name }}</span>
                </el-menu-item> 
            </router-link>
            <menu-bar-item
                v-else
                :key='c.name'
                :item='c'
            />
        </template>
    </el-submenu>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
    name: 'MenuBarItem',
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    },
    setup() {
        const store = useStore()
        return {
            isCollapse: computed(() => store.state.isCollapse)
        }
    }
})
</script>
