export default [
  {
    path: '/console',
    name: 'Console',
    meta: {
      showSilder: true,
      auth: true,
      title: '控制台'
    },
    component: () => import('@/views/Console.vue')
  }
]