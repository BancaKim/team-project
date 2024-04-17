<template>
    <!--
        -> HomeView.vue
        /about -> AboutView.vue
    -->
    <main>
        <div class="container py-4">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>