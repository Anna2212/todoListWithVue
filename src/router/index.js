import Vue from 'vue';
import VueRouter from 'vue-router';
import ListManeger from '../components/ListManeger';
import Details from '../components/Details';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'List',
      component: ListManeger,
    },
    {
      path: '/task/:id',
      name: 'Details',
      component: Details,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
