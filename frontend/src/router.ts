import Vue from 'vue';
import Router from 'vue-router';
import * as views from '@/views';
import RoleChecker from './helpers/RoleChecker';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'start',
      component: views.Start,
    },
    {
      path: '/users/:id',
      name: 'profile',
      component: views.Profile,
    },
    {
      path: '/books/:id',
      name: 'edit book',
      component: views.EditBook,
      beforeEnter: (to, from, next) => { //eslint-disable-line @typescript-eslint/explicit-function-return-type
        if (RoleChecker.checkPermission(2)) {
          next();
        } else {
          next(from);
        }
      },
    },
    {
      path: '/admin',
      name: 'admin',
      component: views.AdminView,
      children: [
        {path: '', component: views.AdminDashboardView},
        {path: 'loans', component: views.AdminLoansView},
        {path: 'titles', component: views.AdminTitlesView},
        {path: 'books', component: views.AdminBooksView},
        {path: 'cards', component: views.AdminCardsView},
      ],
      beforeEnter: (to, from, next) => { //eslint-disable-line @typescript-eslint/explicit-function-return-type        
        if (RoleChecker.checkPermission(2)) {
          next();
        } else {
          next(from);
        }
      },
    },
    {
      path: '/find',
      name: 'find',
      component: views.Find,
    }  
  ],  
});  
