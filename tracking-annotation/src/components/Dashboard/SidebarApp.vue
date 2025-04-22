<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

// Contrôlent l'ouverture des sous-menus (on n'en aura plus pour Evaluations et Utilisateurs)
const openAnnotateurs = ref(false)
const openParametre = ref(false)
</script>

<template>
  <div
    class="relative flex w-full max-w-[15rem] flex-col bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5  max-h-[100%]"
  >
    <nav class="flex flex-col gap-4 p-2 font-sans text-base font-normal text-blue-gray-700">
      <!-- Dashboard -->
      <div class="relative block w-full">
        <div
          role="button"
          class="flex items-center w-full transition-all rounded-lg text-start hover:bg-gray-200 focus:bg-gray-200"
        >
          <button
            type="button"
            class="flex items-center justify-between w-full p-3 text-left transition-colors rounded-md text-gray-800 hover:bg-gray-200"
          >
            <div class="grid mr-6 place-items-center">
              <!-- Icône Dashboard -->
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                <path fill="#353535" d="M12 12V3h-1a10 10 0 1 0 10 10v-1Z" />
                <path fill="#353535" d="M14 10V1a9 9 0 0 1 9 9Z" />
              </svg>
            </div>
            <p class="mr-auto text-md">Dashboard</p>
          </button>
        </div>
      </div>

      <!-- Evaluations (Pas de sous-menu ici) -->
      <div class="relative block w-full">
        <router-link to="/evaluateur"
          class="flex items-center justify-between w-full p-4 rounded-md hover:bg-gray-200 text-gray-800"
        >
          <div class="flex items-center gap-6">
            <!-- Icône Evaluations -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M17.5 18.5v2q0 .2.15.35T18 21t.35-.15t.15-.35v-2h2q.2 0 .35-.15T21 18t-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T18 15t-.35.15t-.15.35v2h-2q-.2 0-.35.15T15 18t.15.35t.35.15zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v5q0 .425-.288.713T20 11t-.712-.288T19 10V5H5v14h5q.425 0 .713.288T11 20t-.288.713T10 21zm0-3v1V5v6.075V11zm2-2q0 .425.288.713T8 17h2.075q.425 0 .713-.288t.287-.712t-.287-.712t-.713-.288H8q-.425 0-.712.288T7 16m0-4q0 .425.288.713T8 13h5q.425 0 .713-.288T14 12t-.288-.712T13 11H8q-.425 0-.712.288T7 12m0-4q0 .425.288.713T8 9h8q.425 0 .713-.288T17 8t-.288-.712T16 7H8q-.425 0-.712.288T7 8m11 15q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23"
              />
            </svg>
            <p class="text-md">Evaluations</p>
          </div>
        </router-link>
      </div>

      <!-- Utilisateurs (Pas de sous-menu ici) -->
      <div class="relative block w-full">
        <router-link
          to="/users"
          class="flex items-center justify-between w-full p-4 rounded-md hover:bg-gray-200 text-gray-800"
        >
          <div class="flex items-center gap-6">
            <!-- Icône Utilisateurs -->
            <svg viewBox="0 0 24 24" fill="#363636" width="28" height="28">
              <path
                d="M7.5,5C5.6,5,4,6.6,4,8.5S5.6,12,7.5,12S11,10.4,11,8.5S9.4,5,7.5,5z
                M16.5,5C14.6,5,13,6.6,13,8.5s1.6,3.5,3.5,3.5S20,10.4,20,8.5S18.4,5,16.5,5z
                M7.5,14C2.6,14,1,18,1,18v2h13v-2C14,18,12.4,14,7.5,14z"
              />
            </svg>
            <p class="text-md">Utilisateurs</p>
          </div>
        </router-link>
      </div>

      <!-- Paramètres -->
      <div class="relative block w-full">
        <button
          @click="openParametre = !openParametre"
          class="flex items-center justify-between w-full p-4 rounded-md hover:bg-gray-200 text-gray-800"
        >
          <div class="flex items-center gap-6">
            <!-- Icône Paramètres -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"
              />
            </svg>
            <p class="text-md">Paramètres</p>
          </div>
          <!-- Chevron pour ouvrir/fermer -->
          <svg
            class="w-4 h-4 transition-transform duration-200"
            :class="{ 'rotate-180': openParametre }"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        <!-- Sous-menu Paramètres -->
        <transition name="fade-slide">
          <div v-if="openParametre" class="ml-8 mt-2 flex flex-col gap-4">
            <router-link
              to="/roles"
              class="text-md text-gray-600 hover:text-gray-900 flex items-center gap-6"
            >
              <!-- Icône Rôles -->
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 4h18v2H3zm0 4h18v2H3zm0 4h18v2H3zm0 4h18v2H3z" />
              </svg>
              Rôles
            </router-link>
            <a href="#" class="text-md text-gray-600 hover:text-gray-900 flex items-center gap-6">
              <!-- Icône Critères -->
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 4h18v2H3zm0 4h18v2H3zm0 4h18v2H3zm0 4h18v2H3z" />
              </svg>
              Critères d'évaluations
            </a>
          </div>
        </transition>
      </div>

      <!-- Statistiques -->
      <div class="relative block w-full">
        <div
          role="button"
          class="flex items-center w-full transition-all rounded-lg text-start hover:bg-gray-200 focus:bg-gray-200"
        >
          <button
            type="button"
            class="flex items-center justify-between w-full p-4 text-left transition-colors rounded-md text-gray-800 hover:text-gray-900"
          >
            <div class="grid mr-6 place-items-center">
              <!-- Icône Statistiques -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m7.4 16l3.05-3.05l2 2L16 11.425V13h2V8h-5v2h1.575l-2.125 2.125l-2-2L6 14.6zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"
                />
              </svg>
            </div>
            <p class="mr-auto text-md">Statistiques</p>
          </button>
        </div>
      </div>

      <!-- Deconnexion (Nouvelle icône) -->
      <div class="relative block w-full">
        <div
          role="button"
          class="flex items-center w-full transition-all rounded-lg text-start hover:bg-gray-200 focus:bg-gray-200"
        >
          <button
            type="button"
            class="flex items-center justify-between w-full p-4 text-left transition-colors rounded-md text-gray-800 hover:text-gray-900"
          >
            <div class="grid mr-6 place-items-center">
              <!-- Nouvelle Icône Deconnexion -->
              <svg viewBox="0 0 24 24" fill="none" class="w-7 h-7 text-gray-700">
                <path
                  d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p class="mr-auto text-md">Déconnexion</p>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<!-- Animations -->
<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
