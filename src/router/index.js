import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home',
      component: r => require.ensure([], () => r(require('@/page/home')), 'home'),
    },
    {
      path: '/home',
      component: r => require.ensure([], () => r(require('@/page/home')), 'home')
    },
    {
      path: '/items',
      component: r => require.ensure([], () => r(require('@/page/items')), 'item')
    },
    {
      path: '/score',
      component: r => require.ensure([], () => r(require('@/page/score')), 'score')
    }
  ]
})
