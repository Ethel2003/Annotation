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
    piste.FirstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    piste.duration.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    piste.dateHeure.toLowerCase().includes(searchQuery.value.toLowerCase())
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
  <div class="p-6 bg-white min-h-screen">
    <h1 class="text-2xl font-bold mb-4 text-gray-700">Liste des Pistes</h1>

    <div class="mb-4 flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17a1 1 0 01-.293.707l-2 2A1 1 0 0110 19v-3.172a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z" />
      </svg>
      <input
      v-model="searchQuery"
      type="text"
      placeholder="Rechercher..."
      class="p-2 border rounded-full w-2/3 hover:bg-gray-100 focus:bg-gray-200 focus:border-gray-300 border-gray-200"
      />
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full table-auto bg-white shadow-lg rounded-xl">
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
            <td class="px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F19E39"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
              {{piste.duration }}
            </td>
            <td class="px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"/></svg>
              {{piste.FirstName }} {{piste.LastName }}
            </td>
            <td class="px-4 py-2">{{ piste.dateHeure }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
