import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import politik from '@/components/politik'
import sport from '@/components/sport'
import travell from '@/components/travell'
import finance from '@/components/finance'
import social from '@/components/social'
import food from '@/components/food'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/sport',
      name: 'sport',
      component: sport
    },
    {
      path: '/travell',
      name: 'travell',
      component: travell
    },
    {
      path: '/finance',
      name: 'finance',
      component: finance
    },
    {
      path: '/politik',
      name: 'politik',
      component: politik
    },
    {
      path: '/social',
      name: 'social',
      component: social
    },
    {
      path: '/food',
      name: 'food',
      component: food
    },
    {
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})
