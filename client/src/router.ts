import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Account from './pages/Account.vue'
import Fishes from './pages/Fishes.vue'
import FishDetails from './pages/FishDetails.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'login',
    path: 'login',
    component: Login
  },
  {
    name: 'register',
    path: 'register',
    component: Register
  },
  {
    name: 'cuenta',
    path: '/account',
    component: Account
  },
  {
    name: 'peces',
    path: '/fishes',
    component: Fishes
  },
  {
    name: 'pezDetalle',
    path: '/fishes/:id',
    component: FishDetails
  },
  {
    name: 'NotFound',
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
