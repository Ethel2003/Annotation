import { createRouter, createWebHistory } from 'vue-router'
import Evaluateur from '@/views/Evaluateur.vue'
import DashboardView from '@/views/DashboardView.vue'
import RolesApp from '@/components/Dashboard/RolesApp.vue'
import Utilisateurs from '@/components/Dashboard/Utilisateurs.vue'
import ListeUserGlobale from '@/components/ListeUserGlobale.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
          path: '/evaluateur',
          name: 'evaluateur',
          component: Evaluateur,
        },
        {
          path: '/globale',
          name: 'globale',
          component: ListeUserGlobale,
        },
      ],
    },
  
  ],
})

export default router
