<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import { useUserGlobaleStore } from '@/stores/counter';

const globaleUsers = useUserGlobaleStore()

const selectedUserId = ref()

const route = useRoute()    

</script>

<template>
    <div class="p-6 bg-white bg-[#0F172A] min-h-screen text-gray-800">
        <h2 class="text-xl font-bold text-[#2563EB] mb-4">Liste Globales des Annotateurs</h2>

        <div class="overflow-x-auto">
    <table class="min-w-full table-auto bg-white shadow-lg rounded-xl">
      <thead class="bg-[#2563EB] text-white text-sm">
        <tr>
          <th class="px-4 py-3 text-left">#</th>
          <th class="px-4 py-3 text-left">ID</th>
          <th class="px-4 py-3 text-left">Annotateur</th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="user in globaleUsers.users" :key="user.id" :value="user.id"
          class="cursor-pointer hover:bg-[#06B6D4]/10 focus:outline-2 focus:outline-offset-2 focus:outline-sky-500 active:bg-blue-600"
        >
          <td class="px-4 py-2">{{ user.no }}</td>
          <td class="px-4 py-2">{{user.id }}</td>
          <td class="px-4 py-2">{{user.FirstName }} {{user.LastName }} </td>
        </tr>
      </tbody>
    </table>
  </div>

      
    </div>
    </template>



