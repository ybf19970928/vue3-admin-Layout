<template>
    <div v-if="isShow">
        <asyncComponent />
    </div>
    <button @click="show">显示</button>
</template>
<script lang="ts">

import { defineComponent, defineAsyncComponent, ref } from 'vue'
const asyncComponent = defineAsyncComponent({
    loader: () => import('./tempComponent.vue')
})
export default defineComponent({
    name: 'UserChildName',
    components: {
        asyncComponent
    },
    setup() {
        const isShow = ref<boolean>(false)
        const show = () => {
            isShow.value = !isShow.value
        }
        return {
            isShow,
            show
        }
    }
})
</script>
