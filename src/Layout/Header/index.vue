<template>
    <div class='navbar'>
        <breadcrumb :level-list='levelList' />
        <div class='right-menu'>
            <el-dropdown
                trigger='click'
                @command='changeCommand'
            >
                <span class='el-dropdown-link'>
                    <el-avatar
                        shape='square'
                        :size='30'
                        src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
                    />
                    <i class='el-icon-arrow-down el-icon--right' />
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command='useCenter'>
                            个人中心
                        </el-dropdown-item>
                        <el-dropdown-item command='logOut'>
                            退出登陆
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
export default defineComponent({
    name: 'Navbar',
    components: { Breadcrumb },
    setup() {
        const router = useRouter()
        const changeCommand = (command:string) => {
            if(command === 'logOut') {
                localStorage.setItem('token', '')
                window.location.reload()
            }
        }
        return {
            changeCommand,
            levelList: computed(() => router.currentRoute.value.matched.map(item => item.name))
        }
    }
})
</script>
<style scoped>
.navbar{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-right: 30px;
    border-bottom: 1px solid #F8F8F9;
}
.navbar .el-breadcrumb{
    padding-left: 30px;
}
.el-dropdown-link{
    display: flex;
    align-items: center;
    cursor: pointer;
    min-width: 60px;
}
</style>
