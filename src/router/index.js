import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import Content from '../contactpage/content.vue';
import Category from '@/Productpage/category.vue';





const routes = [
  {
    path: '/', 
    component: HomeView
  },
  {
    path: '/home', 
    component: HomeView
  },
  {
    path: '/about',
   
    component: AboutView
  },
  {
    path: '/contact',
    component: Content
  },
  {
    path:'/product',
    component: Category
  }
  
 
  
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
