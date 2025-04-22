<script setup>
import { ref } from 'vue'

import { useUserGlobaleStore } from '@/stores/counter';

const globaleUsers = useUserGlobaleStore()

const selectedUserId = ref()

</script>

<template>
    <div class="p-6 bg-white min-h-screen">
      <h2 class="text-xl font-bold text-blue-600 mb-4">Évaluation Mensuelle des Annotateurs</h2>
  
   <!--    <select v-model="selectedUserId" class="mb-4 p-2 border rounded">
        <option disabled value="">Choisissez un utilisateur</option>
        <option v-for="user in globaleUsers.users" :key="user.id" :value="user.id">
          {{ user.FirstName }} {{ user.LastName }} ({{ user.id }})
        </option>
      </select> -->

      
  
      <div v-if="selectedUserId">
        <p><strong>Nom :</strong> {{ globaleUsers.users.FirstName }} {{ selectedUserId.LastName }}</p>
        <p><strong>Email :</strong> {{ selectedUserId.email }}</p>
  
        <h3 class="mt-4 font-semibold">Performances mensuelles :</h3>
        <ul class="list-disc pl-5">
          <li v-for="(val, mois) in selectedUserId.performances" :key="mois">
            {{ mois }} : {{ val }}%
          </li>
        </ul>
      </div>
  
      <div v-else class="text-gray-500">Veuillez sélectionner un utilisateur.</div>
    </div>
  </template>
  