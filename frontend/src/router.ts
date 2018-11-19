import Vue from 'vue';
import Router from 'vue-router';
import Start from './views/Start.vue';
import Profile from './views/Profile.vue';
import Add from './views/Add.vue';
import Find from './views/Find.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
    },
    {
      path: '/find',
      name: 'find',
      component: Find,
    },
  ],
});
