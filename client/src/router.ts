import { createRouter, createWebHashHistory } from "vue-router";

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router