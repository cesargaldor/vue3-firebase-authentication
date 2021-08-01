import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from '../store/index';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authenticated = store.state.user;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !authenticated) {
    next({
      name: 'Home',
    });
  } else if (!requiresAuth && authenticated) {
    return;
  } else {
    next();
  }
});

export default router;
