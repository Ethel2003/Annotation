<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUserGlobaleStore } from '@/stores/counter';

const searchQuery = ref('')

const globaleUsers = useUserGlobaleStore()

const filteredPistes = computed(() => {
  return globaleUsers.users.filter(user =>
    user.id.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.LastName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.FirstName.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

let focusIndex = ref(null)

const emit = defineEmits(['performance'])

const route = useRoute()
function selectPiste2(user, index) {
  focusIndex.value = index
  emit('performance', user)
}
</script>

<template>
  <div class="p-6 bg-white dark:bg-[#0F172A] min-h-screen text-gray-800 dark:text-[#F8FAFC]">
    <h2 class="text-xl font-bold text-gray-700 mb-4">Liste Globales des Annotateurs</h2>

    <div class="mb-4 flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17a1 1 0 01-.293.707l-2 2A1 1 0 0110 19v-3.172a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z" />
      </svg>
      <div class="relative w-1/3">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher..."
          class="p-2 border rounded w-full dark:bg-[#1E293B] dark:text-white pl-10"
        />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="absolute w-5 h-5 top-2.5 left-3 text-gray-400"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full table-auto bg-white dark:bg-[#1E293B] shadow-lg rounded-xl">
        <thead class="bg-gray-700 text-white text-sm">
          <tr>
            <th class="px-4 py-3 border-l-4 border-r-4 border-white text-center">#</th>
            <th class="px-4 py-3 border-l-4 border-r-4 border-white text-center">Annotateur</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in filteredPistes" :key="index" :value="user.id"
            @click="selectPiste2(user, index)"
            :class="{'bg-gray-400': focusIndex === index, 'text-zinc-50': focusIndex === index, 'cursor-pointer': true}" class="h-15 text-center"
          >
            <td class="px-4 py-2">{{ user.no }}</td>
            <td class="px-4 py-2">{{ user.FirstName }} {{ user.LastName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
