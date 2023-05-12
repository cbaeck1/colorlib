import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import NotReady from '../views/NotReady.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Features from '@/components/features/CartList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/features',
    name: 'features',
    component: Features
  },
  {
    path: '/notReady',
    name: 'notready',
    component: NotReady
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes
})

export default router
