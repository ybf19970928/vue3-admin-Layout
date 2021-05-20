import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import '@/router/index'
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
app.use(store).use(router)
    .mount('#app')
