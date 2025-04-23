import RolesApp from '@/components/RolesApp.vue'
import Utilisateurs from '@/components/Utilisateurs.vue'
import AnnotatorInterface from '@/views/annotatorInterface.vue'
import AudioStats from '@/views/audioStats.vue'
import AuthView from '@/views/AuthView.vue'
import DashboardView from '@/views/DashboardView.vue'
import Evaluation from '@/views/evaluation.vue'
import ListeCriteres from '@/views/listeCriteres.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {  
          path:  '/', 
          redirect: '/login'
        },
        {  
          path:  '/login',
          name: 'Connexion',
          component: AuthView,
        },

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
              path:'/annotation',
              component:Evaluation
            },
            {
              path:'/critere-evaluation',
              component:ListeCriteres
            },
            {
              path:'/statistique',
              component:AudioStats,
            },
          ],
        },
       
  ],
})

export default router
