export default [
  {
    path: '/home',
    name: 'Home',
    meta: {
      showSilder: true,
      auth: true,
      title: '控制台'
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      showSilder: false,
      auth: true,
      title: '404'
    },
    component: () => import('@/views/404.vue')
  }
]