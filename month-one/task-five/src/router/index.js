import { createRouter, createWebHistory } from 'vue-router'
import Dark from '../views/Dark.vue'

const routes = [
  {
    path: '/',
    name: 'Dark',
    component: Dark
  },
  {
    path: '/.',
    name: 'Light',
   
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
