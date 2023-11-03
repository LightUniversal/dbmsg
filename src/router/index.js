import { createRouter, createWebHistory } from 'vue-router'
import Register from "../views/Register.vue"
import Homeview from "../views/Homeview.vue"
import Login from "../views/Login.vue"
import firebaseInit from '../components/firebaseInit'
import AddCase from "../views/AddCase.vue"
import Crime from "../views/Crime.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homeview,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/addCase',
      name: 'addCase',
      component: AddCase,
      meta: {
        requiresGuest: false
      }
    },
    {
      path: '/crimes',
      name: 'crimes',
      component: Crime,
      meta: {
        requiresGuest: false
      }
    },
  ]
})
// Guards
router.beforeEach((to, from, next) => {
  // check for requiredAuthGuard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // check if not logged in
    if (!firebaseInit.auth.currentUser) {
      // Go to the login page
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // proceed to the route
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // check if  logged in
    if (firebaseInit.auth.currentUser) {
      // Go to the login page
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // proceed to the route
      next()
    }
  } else {
    // proceed to the route
    next()
  }
})
export default router
