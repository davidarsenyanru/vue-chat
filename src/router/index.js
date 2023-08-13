import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/chat'
  },
  {
    path: '/chat',
    name: 'home',
    component: () => import('../views/ChatView.vue'),
    children: [
      {
        path: '/chat/:id',
        name: 'home',
        component: () => import('@/components/widgets/Chat.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
