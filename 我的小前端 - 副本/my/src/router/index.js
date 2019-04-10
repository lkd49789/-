import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import 'swiper/dist/css/swiper.min.css';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
