import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: () =>
      import(/* webpackChunkName: "search" */ '../views/Search.vue'),
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
