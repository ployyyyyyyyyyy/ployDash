import { createRouter, createWebHistory } from 'vue-router'
import view_Login from '../views/view_Login.vue'
import view_homepage from '../views/view_homepage.vue'
import view_register from '../views/view_register.vue'
import view_date from '../views/view_date.vue'
import view_week from '../views/view_week.vue'
import view_month from '../views/view_month.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: view_Login
    },
    {
      path: '/date/:type',
      name: 'date',
      component: view_date
    },
    {
      path: '/week/:type',
      name: 'week',
      component: view_week
    },
    {
      path: '/month/:type',
      name: 'month',
      component: view_month
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
