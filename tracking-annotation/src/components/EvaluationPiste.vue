<script setup>
import { ref } from 'vue'

const props = defineProps({
  piste2: {
    type: Object,
    required: true,
  },
})

const evaluations = ref([])
</script>

<template>
  <div class="p-6 dark:bg-[#0F172A] text-gray-800 dark:text-[#F8FAFC]">
    <h2 class="text-xl font-bold text-gray-400 mb-5">Informations de la piste</h2>

    <div
      v-if="piste2"
      class="flex flex-col gap-3 mb-6 p-4 rounded-lg text-[#F8FAFC] bg-gray-700 dark:bg-[#1E293B] border shadow-lg/50 shadow-white"
    >
    <p><strong>ID :</strong> {{ piste2.id }}</p>
      <p><strong>Durée :</strong> {{ piste2.duration }}</p>
      <p><strong>Date et Heure:</strong> {{ piste2.dateHeure.replace(' ', ' à ') }}</p>
      <p><strong>Moyenne Piste:</strong> <span class="text-[#22C55E]">{{ piste2.moyenne }}</span></p>
    </div>

    <div v-else class="text-red-600">Aucune piste sélectionnée.</div>
  </div>
</template>
