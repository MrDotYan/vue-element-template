import Vue from 'vue'
import VueRouter from 'vue-router'

import routers from './handle';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/layout"
  },
  {
    path: "/layout",
    name: "layout",
    redirect: "/home",
    meta: {
      auth: true,
      title: "layout"
    },
    component: () => import('@/layout/Layout.vue'),
    children: routers
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
