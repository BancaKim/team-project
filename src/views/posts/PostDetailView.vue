<template>
    <div>
        <h2>{{form.title}}</h2>
        <p>{{form.content}}</p>
        <p class="text-muted">{{form.createdAt}}</p>
        <hr class="my-4">
        <div class="row g-2">
            <div class="col-auto">
                <button class="btn btn-outline-dark">이전글</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-outline-dark">다음글</button>
            </div>
            <div class="col-auto me-auto"></div>
            <div class="col-auto">
                <button class="btn btn-outline-dark" @click="goListPage">목록</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-outline-danger">삭제</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
import { getPostById } from '@/api/posts';
import {ref} from 'vue';

    const props = defineProps({
        id: Number,

    })

    // const route = useRoute();
    const router = useRouter();
    // const id = route.params.id;
    /*
    ref 선언 시 장점 : 한꺼번에 객체 할당이 가능
    const form = reactive({});
    form = {...data} -> 반응형 성격 소실
    form.title = data.title;
    form.content = data.content;이런 식으로 넣어줘야함
    단점) form.value.title , form.value.content 이런식으로 접근해야함
    reactive 장) form.title, form.content
    단) 객체 할당 불가
    */
    const form = ref({});

    const fetchPost = () => {
    const data = getPostById(props.id);
    form.value = {...data};  //객체 할당
    }
    fetchPost();
    const goListPage = () => router.push({name:'PostList'});
    const goEditPage = () => router.push({ name: 'PostEdit', params:{id:props.id} });
</script>

<style lang="scss" scoped></style>