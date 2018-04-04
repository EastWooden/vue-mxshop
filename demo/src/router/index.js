import Router from 'vue-router'
import Vue from 'vue'
import GoodsList from '@/views/GoodsList'
import Info from '@/views/Info'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Carts from '@/views/Carts'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods/:goodsId', // 动态路由
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
      children: [ // 嵌套路由
        {
          path: 'title',
          name: 'title',
          component: Title
        },
        {
          path: 'image',
          name: 'image',
          component: Image
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Carts
    }
  ]
})
export default router
