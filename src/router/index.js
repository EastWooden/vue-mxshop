import Vue from 'vue';
import Router from 'vue-router';
import Pos from '@/components/Pos';
import Shop from '@/components/Shop';

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      component: Pos,
      name: 'Pos'
    },
    {
      path: '/shop',
      component: Shop,
      name: 'shop'
    }
  ]
});
export default router;
