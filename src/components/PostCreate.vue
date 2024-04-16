<template>
    <div class="row">
        <div class="col col-2">
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div class="col col-8">
            <input v-model="title" type="text" class="form-control">
        </div>
        <div class="col col-2">
            <button class="btn btn-primary" @click="$emit('createPost')">button</button>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
    export default {
        emits: {
            createPost: newTitle => {
                console.log('validator: ', newTitle);
            }
        }
    }
</script>

<style scoped>

</style>