<template>
    <div class='toggle-menu'>
        <div
            class='arrow-direction'
            @click='changeMenu'
        >
            <svg
                :class='{&apos;arrow-direction-icon&apos;:isCollapse}'
                class='hamburger'
                viewBox='0 0 1024 1024'
                xmlns='http://www.w3.org/2000/svg'
                width='64'
                height='64'
            >
                <path d='M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z' />
            </svg>
        </div>
        <el-breadcrumb separator-class='el-icon-arrow-right'>
            <transition-group name='breadcrumb'>
                <el-breadcrumb-item 
                    v-for='(item,index) in levelList'
                    :key='index'
                >
                    {{ item }}
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
// import leftIcon from '@/assets/left.svg'
export default defineComponent({
    name: 'Breadcrumb',
    props: {
        levelList: {
            type: Array,
            default: () => ([])
        }
    },
    setup() {
        const store = useStore()
        const changeMenu = () => {
            store.dispatch('changetoggle')
        }
        return {
            changeMenu,
            isCollapse: computed(() => store.state.isCollapse)
        }
    }
})
</script>
<style lang="scss" scoped>
.toggle-menu{
    height: 100%;
    display: flex;
    align-items: center;
    .arrow-direction{
        padding:0 10px;
        cursor: pointer;
        .hamburger{
            width: 20px;
            height: 20px;
            vertical-align: middle;
        }
        .arrow-direction-icon{
            transform: rotate(180deg);
        }
    }
}
</style>

