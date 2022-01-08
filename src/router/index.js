import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ToDos from '../views/ToDos.vue'
import PomodoroTimer from '@/views/PomodoroTimer'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/to-dos',
    name: 'To-Dos',
    component: ToDos
  },
  {
    path: '/pomodoroTimer',
    name: 'Pomodoro Timer',
    component: PomodoroTimer
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
