<template>
    <div class='login-box'>
        <el-form
            label-width='80px'
            :model='form'
        >
            <el-form-item label='用户名'>
                <el-input v-model='form.username' />
            </el-form-item>
            <el-form-item label='密码'>
                <el-input v-model='form.password' />
            </el-form-item>
            <el-form-item>
                <el-button
                    type='primary'
                    @click='onSubmit'
                >
                    登陆
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { IUserLogin, login } from '@/api/user'
import { ElMessage } from 'element-plus'



export default defineComponent({
    name: 'Login',
    setup() {
        const form = reactive<IUserLogin>({
            username: 'admin',
            password: '123456'
        })
        const router = useRouter()
        const onSubmit = ():void => {
            if(form.username.trim() === '' && form.password.trim().length === 0) return
            login({ username: form.username ,password: form.password }).then(res => {
                if (res.data.success) {
                    localStorage.setItem('token', res.data.data.token)
                    router.push({ path: '/Home' })
                }else{
                    ElMessage.error('用户名或密码错误')
                }
            })
        }
        return {
            onSubmit,
            form
        }
    }
})
</script>
<style lang="scss" scoped>
.login-box{
    width: 400px;
    margin: 0 auto;
    margin-top: 100px;
}
</style>

