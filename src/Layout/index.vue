<template>
    <div class='layout'>
        <menuBar class='menu-bar' />
        <div class='main-container'>
            <navbar />
            <tagViews />
            <div
                id='app-main-vue'
                class='app-main'
            >
                <router-view />
            </div>
        </div>
        <div id='app-main-vue2' />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import menuBar from './menubar/index.vue'
import navbar from './Header/index.vue'
import tagViews from './tagViews/index.vue'

export default defineComponent({
    name: 'Layout',
    components: { menuBar, navbar, tagViews }
})
</script>

<style scoped lang="scss">
.layout{
  width: 100%;
  height: 100%;
  display: flex;
}
.menu-bar{
  height: 100vh;
}
.main-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.app-main{
  width: 100%;
  height: calc(100vh - 75px);
  background-color: #F8F8F9;
}
</style>

