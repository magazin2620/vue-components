import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/filter',
    name: 'Filter',
    component: () =>
      import(/* webpackChunkName: "filter" */ '../views/Filter.vue'),
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: () =>
      import(/* webpackChunkName: "pagination" */ '../views/Pagination.vue'),
  },
  {
    path: '/intersection',
    name: 'Intersection',
    component: () =>
      import(/* webpackChunkName: "pagination" */ '../views/Intersection.vue'),
  },
    {
    path: '/modal',
    name: 'Modal',
    component: () =>
      import(/* webpackChunkName: "search" */ '../views/Modal.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
