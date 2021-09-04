import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('@/views/Home.vue'),
  },
  {
    path: '/deleted-affair',
    name: 'DeletedAffair', 
    component: () => import('@/views/DeletedAffair.vue'),
  },
  {
    path: '/credits',
    name: 'Credits',
    component: () => import ('@/views/Credits.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router