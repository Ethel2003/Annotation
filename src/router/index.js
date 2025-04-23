import AdminSideBarView from '@/components/Admin/AdminSideBarView.vue'
import AnnotateurSideBarView from '@/components/Annotateur/AnnotateurSideBarView.vue'
import EvaluateurSideBarView from '@/components/Evaluateur/EvaluateurSideBarView.vue'
import AdminMainView from '@/views/Admin/AdminMainView.vue'
import AnnotateurMainView from '@/views/Annotateur/AnnotateurMainView.vue'
import BaseLayoutView from '@/views/BaseLayoutView.vue'
import EvaluateurMainView from '@/views/Evaluateur/EvaluateurMainView.vue'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/',
      name: 'baselayout',
      component: BaseLayoutView,
      children: [
        {
          path: '/annotateur',
          components: {
            default: AnnotateurMainView,
            sidebar: AnnotateurSideBarView
          }
        },
        {
          path: '/evaluateur',
          components: {
            default: EvaluateurMainView,
            sidebar: EvaluateurSideBarView
          }
        },
        {
          path: '/admin',
          components: {
            default: AdminMainView,
            sidebar: AdminSideBarView
          }
        }
      ]
    },
    {
      // path: '/about',
      // name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
