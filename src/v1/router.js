import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import PageNotFound from './pages/utility/PageNotFound.vue'
import Signin from './pages/Signin.vue'
import Signup from './pages/Signup.vue'
import Google from './pages/Google.vue'
import ResetPassword from './pages/ResetPassword.vue'
import Profile from './pages/Profile.vue'
import Account from './pages/settings/Account.vue'
import NotificationsPanel from './pages/settings/Notifications.vue'
import AppPanel from './pages/settings/Apps.vue'
import Shop2 from './pages/ecommerce/Shop2.vue'
import Settings from './pages/settings/Setting.vue'
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/dashboard',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    
    },
    {
      path: '/',
      component: Signin
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/google',
      component: Google
    },
    {
      path: '/reset-password',
      component: ResetPassword
    },
    {
      path: '/settings',
      component: Settings,
      name:'settings',
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'account',
          name: 'account',
          component: Account
        },
        {
          path:'notifications',
          name: 'notifications',
          component: NotificationsPanel
        },
        {
          path:'apps',
          name: 'wishlist',
          component:AppPanel
        },
      ]
    },
    {
      path:'/explore',
      component: Shop2,
      meta: {
        requiresAuth: true
      }
    },      
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
 
  let isAuthenticated = sessionStorage.getItem("isLogedIn") /* Check if user has an active session */
  isAuthenticated = (isAuthenticated==null || isAuthenticated=='false' )?false:true;
  console.log(isAuthenticated);
  if ((to.path === '/'|| to.name === '/signup') && isAuthenticated) {
    next({ path: '/dashboard' })
  } 
  else if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ path: '/' })
  } 
  else {
    next()
  }
})

export default router
