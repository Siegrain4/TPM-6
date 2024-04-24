// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import NewsList from '../components/NewsList.vue';
import NewsDetail from '../components/NewsDetail.vue'; // Import halaman NewsDetail

const routes = [
  { path: '/', component: NewsList },
  { path: '/detail/:id', name: 'NewsDetail', component: NewsDetail, props: true }, // Definisikan rute dengan parameter ID dan beri nama 'NewsDetail'
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
