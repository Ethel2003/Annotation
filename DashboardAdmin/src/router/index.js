import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import RolesApp from '@/components/RolesApp.vue'
import Utilisateurs from '@/components/Utilisateurs.vue'
import AuthView from '@/views/AuthView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    
    {  
      path:  '/', redirect: '/login'
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
      ],
    },
  ],
})

export default router
