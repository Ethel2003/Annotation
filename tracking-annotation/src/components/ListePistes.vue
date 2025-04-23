<script setup>
import { ref, computed, watch } from 'vue'
import { useUserGlobaleStore } from '@/stores/counter'

const props = defineProps({
  refreshSignal:String
})

watch(props, ()=>{
  pistes.users = pistes.users.filter((el) => el.id != props.refreshSignal)
})

const pistes = useUserGlobaleStore()

/* const pistes = ref([
  { no: 1, id: 'PIS1', LastName: 'Doe', FirstName: 'John', Duration: '3:45' },
  { no: 2, id: 'ATS1', LastName: 'Smith', FirstName: 'Jane', Duration: '4:20' },
  { no: 3, id: 'FES1', LastName: 'Johnson', FirstName: 'Alice', Duration: '5:10' },
  { no: 4, id: 'PIS2', LastName: 'Brown', FirstName: 'Bob', Duration: '2:55' },
  { no: 5, id: 'ATS2', LastName: 'Miller', FirstName: 'Eve', Duration: '3:30' },
  { no: 6, id: 'FES2', LastName: 'Davis', FirstName: 'Charlie', Duration: '4:15' },
  { no: 7, id: 'PIS3', LastName: 'Wilson', FirstName: 'Frank', Duration: '2:40' },
  { no: 8, id: 'ATS3', LastName: 'Moore', FirstName: 'Grace', Duration: '3:05' },
  { no: 9, id: 'FES3', LastName: 'Taylor', FirstName: 'Hannah', Duration: '4:50' },
  { no: 10, id: 'PIS4', LastName: 'Anderson', FirstName: 'Isaac', Duration: '2:35' }, 
]) */

const searchQuery = ref('')

const filteredPistes = computed(() => {
  return pistes.users.filter(piste =>
    piste.id.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    piste.LastName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    piste.FirstName.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const focusIndex = ref(null)

 const emit = defineEmits(['piste-clicked']) 

 const selectPiste = (piste, index) => {
  emit('piste-clicked', piste)
  focusIndex.value = index
} 
</script>

<template>
  <div class="p-6 bg-white dark:bg-[#0F172A] min-h-screen">
    <h1 class="text-2xl font-bold mb-4 text-gray-700 dark:text-[#F8FAFC]">Liste des Pistes</h1>

    <div class="mb-4 flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17a1 1 0 01-.293.707l-2 2A1 1 0 0110 19v-3.172a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z" />
      </svg>
      <input
      v-model="searchQuery"
      type="text"
      placeholder="Rechercher..."
      class="p-2 border rounded w-1/3 dark:bg-[#1E293B] dark:text-white"
      />
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full table-auto bg-white dark:bg-[#1E293B] shadow-lg rounded-xl">
        <thead class="bg-gray-700 text-white text-sm">
          <tr>
            <th class="px-4 py-3 text-left border-l-4 border-r-4 border-white">#</th>
            <th class="px-4 py-3 text-left border-l-4 border-r-4 border-white">ID Piste</th>
            <th class="px-4 py-3 text-left border-l-4 border-r-4 border-white">Durée</th>
            <th class="px-4 py-3 text-left border-l-4 border-r-4 border-white">Annotateurs</th>
            <th class="px-4 py-3 text-left border-l-4 border-r-4 border-white">Date & Heure</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(piste, index) in filteredPistes"
            :key="index"
            @click="selectPiste(piste, index)"
            :class="{'bg-gray-400': focusIndex === index, 'text-zinc-50': focusIndex === index, 'cursor-pointer': true}" class="h-15"
          >
            <td class="px-4 py-2">{{ piste.no}}</td>
            <td class="px-4 py-2">{{piste.id }}</td>
            <td class="px-4 py-2">{{piste.duration }}</td>
            <td class="px-4 py-2">{{piste.FirstName }} {{piste.LastName }}</td>
            <td class="px-4 py-2">{{ piste.dateHeure }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
