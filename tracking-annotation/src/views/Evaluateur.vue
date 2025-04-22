<script setup>
import { ref, watch } from 'vue'
import StatsPiste from '@/components/StatsPiste.vue'
import ListePistes from '@/components/ListePistes.vue'
import EvaluationPiste from '@/components/EvaluationPiste.vue'
import FormNotation from '@/components/FormNotation.vue'
import StatistiqueGlobales from './StatistiqueGlobales.vue'

// Pistes sélectionnées
const selectedPisteForStats = ref(null)
const selectedPisteForEvaluation = ref(null)
const selectedPisteForForm=ref()
// Gestion du clic sur une piste
const handlePisteClick = (piste) => {
  selectedPisteForStats.value = piste
  selectedPisteForEvaluation.value = piste
  selectedPisteForForm.value=piste
}

// Gestion de la navigation entre les pages
const isGlobalStatsPage = ref(false)
const togglePage = () => {
  isGlobalStatsPage.value = !isGlobalStatsPage.value
}

const refreshSignal=ref('')

// watch(refreshSignal, ()=>{alert(refreshSignal)})
</script>

<template>
  <div class="flex justify-end">
    <button 
      @click="togglePage" 
      class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-400">
      {{ isGlobalStatsPage ? 'Revenir à l\'évaluation' : 'Aller à Statistiques Globales' }}
    </button>
  </div>

  <div v-if="!isGlobalStatsPage" class="flex flex-col lg:flex-row gap-4">
    <!-- Colonne de gauche : Stats -->
    <div class="lg:w-[40%] max-h-[80%]">
      <ListePistes @piste-clicked="handlePisteClick" :refreshSignal="refreshSignal" />
    </div>

    <!-- Colonne de droite : Liste + Détail -->
    <div class="lg:w-[60%] flex flex-col gap-4 mt-1 rounded-xl">
      <div class="flex justify-between">
        <div class="w-1/2">
          <StatsPiste :piste1="selectedPisteForStats" />
        </div>
        <div class="w-1/2">
          <EvaluationPiste :piste2="selectedPisteForEvaluation" />
        </div>
      </div>
      <FormNotation :piste="selectedPisteForForm" @refresh="(msg)=>refreshSignal=msg"/>
    </div>
  </div>

  <div v-else>
    <StatistiqueGlobales />
  </div>
</template>
