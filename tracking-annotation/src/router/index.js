import RolesApp from '@/components/RolesApp.vue'
import Utilisateurs from '@/components/Utilisateurs.vue'
import AnnotatorInterface from '@/views/annotatorInterface.vue'
import DashboardView from '@/views/DashboardView.vue'
import Evaluation from '@/views/evaluation.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

       {
          path: '/admin',
          name: 'Dashboard',
          component: DashboardView,
          children: [
            {
              path: '/roles',
              component: RolesApp,
            },
            {
              path: '/users',
              component: Utilisateurs,
            },
            {
              path:'/evaluation',
              component:Evaluation
            },
          ],
        },
       
  ],
})

export default router
