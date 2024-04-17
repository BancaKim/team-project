<template>
    <main>
        <div class="container py-4">
            <button class="btn btn-primary" type="button">My Button</button>
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