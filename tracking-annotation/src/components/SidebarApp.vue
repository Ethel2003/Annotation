<script setup>
import { ref } from 'vue'

// Contrôlent l'ouverture des sous-menus (on n'en aura plus pour Evaluations et Utilisateurs)
const openAnnotateurs = ref(false)
const openParametre = ref(false)
const openEvaluateur = ref(false)
</script>

<template>
  <div
    class="flex w-full max-w-[15rem] flex-col justify-between bg-blue-900/90 bg-clip-border py-4 shadow-lg shadow-gray-900 max-h-screen">
    <nav class="flex flex-col gap-4 py-2 font-sans text-base font-normal text-blue-gray-700">
      <!-- Logo de l'aplication -->
      <div class="h-15 flex items-center border-b border-white/60">
        <img src="../assets/image/logoWhite.svg" alt="logo" />
      </div>

      <!-- Evaluations (sous-menu ici) -->
      <button @click="openEvaluateur = !openEvaluateur"
        class="flex items-center justify-between w-full p-4 hover:bg-[#F1F5F9] hover:text-black text-white">
        <div class="flex items-center gap-6">
          <!-- Icône Évaluateur -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M17.5 18.5v2q0 .2.15.35T18 21t.35-.15t.15-.35v-2h2q.2 0 .35-.15T21 18t-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T18 15t-.35.15t-.15.35v2h-2q-.2 0-.35.15T15 18t.15.35t.35.15zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v5q0 .425-.288.713T20 11t-.712-.288T19 10V5H5v14h5q.425 0 .713.288T11 20t-.288.713T10 21zm0-3v1V5v6.075V11zm2-2q0 .425.288.713T8 17h2.075q.425 0 .713-.288t.287-.712t-.287-.712t-.713-.288H8q-.425 0-.712.288T7 16m0-4q0 .425.288.713T8 13h5q.425 0 .713-.288T14 12t-.288-.712T13 11H8q-.425 0-.712.288T7 12m0-4q0 .425.288.713T8 9h8q.425 0 .713-.288T17 8t-.288-.712T16 7H8q-.425 0-.712.288T7 8m11 15q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23" />
          </svg>
          <p class="text-md">Évaluateur</p>
        </div>
        <!-- Chevron pour ouvrir/fermer -->
        <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': openEvaluateur }" fill="none"
          stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <transition name="fade-slide">
        <div v-if="openEvaluateur" class="ml-8 mt-2 flex flex-col gap-4">
          <router-link to="/evaluateur" class="text-md text-white hover:text-gray-900 flex items-center gap-6">
            Liste des pistes
          </router-link>
          <router-link to="/globale" class="text-md text-white hover:text-gray-900 flex items-center gap-6">
            Stats Annotateurs
          </router-link>
        </div>
      </transition>


      <!-- profil Annotateur -->
      <div class="relative block w-full">
        <button @click="openAnnotateurs = !openAnnotateurs"
          class="flex items-center justify-between w-full p-4 hover:bg-[#F1F5F9] text-white hover:text-black cursor-pointer">
          <div class="flex items-center gap-6">
            <!-- Icône Paramètres -->
            <svg fill="currentColor" width="24" height="24" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <g fill-rule="evenodd" clip-rule="evenodd" stroke="none" stroke-width="1">
                <path
                  d="M1468.235 113v99.388l-112.94 112.941v-99.388H112.94v1468.235h1242.353v-438.211l112.941-112.941v664.094H0V113h1468.235ZM421.271 1163.353c96-9.035 154.729 108.423 190.87 197.647 28.235 68.894 38.4 92.612 72.283 96 33.882 3.388 89.223-58.73 112.94-101.647 16.53-26.51 51.42-34.6 77.93-18.07 26.51 16.529 34.6 51.42 18.07 77.929-9.035 16.94-92.611 160.376-205.552 160.376h-9.036c-70.023-4.517-121.976-48.564-169.411-166.023-47.436-117.46-77.93-127.624-77.93-127.624a484.518 484.518 0 0 0-97.13 225.883c-6.549 31.187-37.14 51.16-68.329 44.611-31.187-6.55-51.16-37.141-44.611-68.33 20.33-94.87 79.059-310.587 199.906-320.752Zm256.376-485.647v112.941H338.824V677.706h338.823ZM903.53 451.824v112.94H338.824v-112.94h564.705Z" />
                <path
                  d="m1903.059 468.765-225.883-225.883a56.47 56.47 0 0 0-80.188 0L919.341 920.53a56.476 56.476 0 0 0-15.813 39.53v282.353h282.354a56.47 56.47 0 0 0 39.53-16.941l677.647-677.647c21.523-21.959 21.523-57.101 0-79.06Zm-740.894 660.706H1016.47V983.776l451.764-451.764 145.694 145.694-451.764 451.765Zm531.953-531.953-145.694-145.694 89.223-89.224 145.694 145.694-89.223 89.224Z" />
              </g>
            </svg>
            <p class="text-md">Annotations</p>
          </div>
          <!-- Chevron pour ouvrir/fermer -->
          <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': openAnnotateurs }" fill="none"
            stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        <!-- Sous-menu Paramètres -->
        <transition name="fade-slide">
          <div v-if="openAnnotateurs" class="ml-8 mt-2 flex flex-col gap-4">
            <router-link to="/annotation" class="text-md text-white hover:text-black flex items-center gap-6">
              Enregistrement de Piste Audio
            </router-link>
          </div>
        </transition>
      </div>

      <!-- Utilisateurs (Pas de sous-menu ici) -->
      <div class="relative block w-full">
        <router-link to="/users"
          class="flex items-center justify-between w-full p-4 hover:bg-[#F1F5F9] hover:text-black text-white">
          <div class="flex items-center gap-6">
            <!-- Icône Utilisateurs -->
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
              <path d="M7.5,5C5.6,5,4,6.6,4,8.5S5.6,12,7.5,12S11,10.4,11,8.5S9.4,5,7.5,5z
                M16.5,5C14.6,5,13,6.6,13,8.5s1.6,3.5,3.5,3.5S20,10.4,20,8.5S18.4,5,16.5,5z
                M7.5,14C2.6,14,1,18,1,18v2h13v-2C14,18,12.4,14,7.5,14z" />
            </svg>
            <p class="text-md">Utilisateurs</p>
          </div>
        </router-link>
      </div>

      <!-- Statistiques -->
      <div class="relative block w-full">
        <router-link to="/statistique">
          <div role="button"
            class="flex items-center w-full transition-all text-start hover:bg-[#F1F5F9] focus:bg-gray-200">
            <button type="button"
              class="flex items-center justify-between w-full p-4 text-left transition-colors text-white hover:text-gray-900 cursor-pointer">
              <div class="grid mr-6 place-items-center">
                <!-- Icône Statistiques -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="m7.4 16l3.05-3.05l2 2L16 11.425V13h2V8h-5v2h1.575l-2.125 2.125l-2-2L6 14.6zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z" />
                </svg>
              </div>
              <p class="mr-auto text-md">Statistiques</p>
            </button>
          </div>
        </router-link>
      </div>

      <!-- Paramètres -->
      <div class="relative block w-full">
        <button @click="openParametre = !openParametre"
          class="flex items-center justify-between w-full p-4 hover:bg-[#F1F5F9] hover:text-black text-white cursor-pointer">
          <div class="flex items-center gap-6">
            <!-- Icône Paramètres -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5" />
            </svg>
            <p class="text-md">Paramètres</p>
          </div>
          <!-- Chevron pour ouvrir/fermer -->
          <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': openEvaluateur }" fill="none"
            stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        <!-- Sous-menu Paramètres -->
        <transition name="fade-slide">
          <div v-if="openParametre" class="ml-8 mt-2 flex flex-col gap-4">
            <router-link to="/roles" class="text-md text-white hover:text-gray-900 flex items-center gap-6">
              Rôles
            </router-link>

            <router-link to="/critere-evaluation"
              class="text-md text-white hover:text-gray-900 flex items-center gap-6">
              Critères d'évaluations
            </router-link>
          </div>
        </transition>
      </div>      
    </nav>

    <!-- Deconnexion (Nouvelle icône) -->
    <div class="relative block w-full">
      <div role="button">
        <router-link to="/login">
          <button type="button"
            class="flex items-center justify-between w-full p-4 transition-colors text-white hover:bg-[#F1F5F9] hover:text-black cursor-pointer ">
            <div class="mr-4">
              <!-- Nouvelle Icône Deconnexion -->
              <svg viewBox="0 0 24 24" fill="none" class="w-7 h-7">
                <path 
                  d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <p class="mr-auto text-md">Déconnexion</p>
          </button>
        </router-link>
      </div>
    </div>
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
