import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import MyPageView from '@/views/MyPageView.vue'
import MyAreaView from '@/views/MyAreaView.vue'
import PostCreateView from '@/views/posts/PostCreateView.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'
import PostListView from '@/views/posts/PostListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
   {
    path: '/myarea',
    component: MyAreaView
  },
  {
    path: '/mypage',
    component: MyPageView
  },
  {
    path: '/posts',
    component: PostListView
  },
   {
    path: '/posts/create',
    component: PostCreateView
  },
   {
    path: '/posts/:id',
    component: PostDetailView
  },
   {
    path: '/posts/:id/edit',
    component: PostEditView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router