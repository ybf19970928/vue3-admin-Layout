import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createRouterGuards } from '@/router/index'
import store from './store'
import 'element-plus/lib/theme-chalk/index.css'
import { components, plugins } from './assets/Elmodule/index'
import './assets/styles/index.scss'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
})
plugins.forEach(plugin => {
    app.use(plugin)
})

createRouterGuards()
app.use(store).use(router)
    
router.isReady().then(() => {
    app.mount('#app')
})
