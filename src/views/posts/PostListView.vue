<template>
    <div>
        <h2>게시글 목록</h2>
        <hr class="my-4">
        <div class="d-flex" role="search">
            <button class="btn btn-outline-success" type="button" @click="goPage">글쓰기</button>
        </div>
        <div class="row g-3">
            <div v-for="post in posts" :key="post.id" class="col-4">
                <AppCard 
                :title="post.title"
                :content="post.content" 
                :created-at="post.createdAt"
                @click="goPageId(post.id)">
            </AppCard>
            </div>
        </div>
        <hr class="my-4">
        <AppCard2> 
            <PostDetailView :id="1"></PostDetailView>
        </AppCard2>

    </div>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';
import PostDetailView from  '@/views/posts/PostDetailView.vue';
import AppCard2 from '@/components/AppCard2.vue';
import {getPosts} from '@/api/posts'
import { useRouter } from 'vue-router';
import {ref} from 'vue';
const posts = ref([]);
const fetchPosts = () => {
    posts.value = getPosts();
}
fetchPosts();
const router = useRouter()
const goPage = () => {
    router.push('/posts/create');
};
const goPageId = (id) => {
    // router.push(`/posts/'${id}`);
    router.push({
        name:'PostDetail',
        params: {
            id,
        }
    })
};

</script>

<style lang="scss" scoped></style>