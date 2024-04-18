import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import MyPageView from '@/views/MyPageView.vue'
import MyAreaView from '@/views/MyAreaView.vue'
import PostCreateView from '@/views/posts/PostCreateView.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'
import PostListView from '@/views/posts/PostListView.vue'
import NoticeCom from '@/components/NoticeCom.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NestedView from '@/views/nested/NestedView.vue'

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
    name: 'PostList',
    component: PostListView
  },
   {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView
  },
   {
    //  /posts/alice
    //  /posts/bruce  ->postdetailview
    //  /user/tom
    path: '/posts/:id',
    name:"PostDetail",
    component: PostDetailView
  },
   {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView
  },
   {
    path: '/notice',
    name: 'Notice',
    component: NoticeCom
  },
    {path: '/:pathMatch(.*)*', 
    name:'NotFound', 
    component: NotFoundView}
    ,
    {path: '/nested', 
    name:'Nested', 
    component: NestedView},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router