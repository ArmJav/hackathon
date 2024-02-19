import { createRouter, createWebHistory } from 'vue-router'
import VisitView from '../views/VisitView.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Confirm from '../views/Confirm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'firstpage',
      component: VisitView
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/visit',
      name: 'visit',
      component: VisitView
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confirm
    },
    {
      path: '/registration',
      name: 'registration',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegistrationView.vue')
    }
  ]
})

export default router
