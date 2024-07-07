import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomeVue.vue';
import PredictionForm from '../components/PredictionForm.vue';
import PredictionList from '../components/PredictionList.vue';
import PredictionDetail from '../components/PredictionDetail.vue'; 

const routes = [
  { path: '/', component: Home },
  { path: '/submit', component: PredictionForm },
  { path: '/predictions', component: PredictionList },
  { path: '/prediction/:id', component: PredictionDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
