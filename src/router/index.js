import { createRouter, createWebHistory } from 'vue-router'
import view_FF from '../views/view_FF.vue'
import view_Login from '../views/view_Login.vue'
import view_homepage from '../views/view_homepage.vue'
import view_register from '../views/view_register.vue'
import view_FFweek from '../views/view_FFweek.vue'
import view_FFmonth from '../views/view_FFmonth.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: view_Login
    },
    {
      path: '/FF',
      name: 'FF',
      component: view_FF
    },
    {
      path: '/FFweek',
      name: 'FFweek',
      component: view_FFweek
    },
    {
      path: '/FFmonth',
      name: 'FFmonth',
      component: view_FFmonth
    },
    {
      path: '/Login',
      name: 'Login',
      component: view_Login
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: view_homepage
    },
    {
      path: '/register',
      name: 'register',
      component: view_register
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
