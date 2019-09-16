import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Callback from '@/components/Callback.vue'
import Create from '@/components/Create.vue'

import { requireAuth } from '@/services/auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: requireAuth,
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      beforeEnter: requireAuth,
      component: Create
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
  ]
})
