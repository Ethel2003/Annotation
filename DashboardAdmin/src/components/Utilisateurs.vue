<script setup>
import HeaderTable from './HeaderTable.vue'

const users = [
  {
    nom: 'Dupont',
    prenom: 'Jean',
    login: 'jdupont',
    password: '******',
    isldap: true,
    role: 'Admin',
  },
  {
    nom: 'Martin',
    prenom: 'Claire',
    login: 'cmartin',
    password: '******',
    isldap: false,
    role: 'Utilisateur',
  },
  {
    nom: 'Durand',
    prenom: 'Paul',
    login: 'pdurand',
    password: '******',
    isldap: true,
    role: 'Gestionnaire',
  },
]
</script>

<template>
  <div class="p-1">

     <!-- Header -->
     <div class="flex items-center justify-between mb-6">
      <div>
        <div class="flex mx-4 my-2 items-center justify-center">
          <svg
            class="w-6 h-6 mr-2.5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            ></path>
          </svg>
          <nav class="text-md text-gray-500 mt-1 ml-4 flex gap-1.5">
            Home
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Users
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            List
          </nav>
        </div>
        <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl mx-4 my-2">
          Liste des utilisateurs
        </h2>
      </div>
    </div>

    <HeaderTable />

   

    <!-- Users Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-left">
        <thead class="">
          <tr class="text-gray-500 bg-gray-100 text-sm border">
            <th class="pl-4"><input type="checkbox" /></th>
            <th class="p-4">Nom</th>
            <th class="p-4">Prénom</th>
            <th class="p-4">Login</th>
            <th class="p-4">Mot de passe</th>
            <th class="p-4">Isldap</th>
            <th class="p-4">Role</th>
            <th class="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.login">
            <td class="p-4 border-b border-gray-300"><input type="checkbox" /></td>
            <td class="p-4 border-b border-gray-300">{{ user.nom }}</td>
            <td class="p-4 border-b border-gray-300">{{ user.prenom }}</td>
            <td class="p-4 border-b border-gray-300">{{ user.login }}</td>
            <td class="p-4 border-b border-gray-300">{{ user.password }}</td>
            <td class="p-4 border-b border-gray-300">
              <span
                :class="[
                  'inline-block px-2 py-1 text-xs font-semibold rounded',
                  user.isldap ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600',
                ]"
              >
                {{ user.isldap ? 'Oui' : 'Non' }}
              </span>
            </td>
            <td class="p-4 font-medium border-b border-gray-300">{{ user.role }}</td>
            <td class="p-4 flex gap-2 border-b border-gray-300">
              <button
                class="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
                  />
                </svg>
                Modifier
              </button>
              <button
                class="bg-red-600 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17"
                  />
                </svg>
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 10px;
}
</style>
