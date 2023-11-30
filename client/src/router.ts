import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Account from './pages/Account.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'register',
    path: '/register',
    component: Register
  },
  {
    name: 'cuenta',
    path: '/account',
    component: Account
  }
  /*{
    path: '/*',
    component: NotFound
  }*/
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
