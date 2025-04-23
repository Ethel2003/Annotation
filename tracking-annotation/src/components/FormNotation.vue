<script setup>
import { ref } from 'vue'
import { useUserGlobaleStore } from '@/stores/counter'

const userGlobale = useUserGlobaleStore()
let selection = ref('')

const newNote = ref()

const props = defineProps({
    piste: Object
})

console.log(props.piste);

const listeCritere = ref([
  'Exactitude',
  'Coherence',
  'Exhaustivite',
  'Clarte',
  'Respect des consignes',
])

function addFunction() {
  console.log(userGlobale.tabNoteCritere)
  
    if (userGlobale.tabNoteCritere.some(c => c.critere === selection.value)) {
      alert(`${selection.value} a été déjà ajouté`)
      return
    }
  else{
  userGlobale.tabNoteCritere.push({ id: props.piste.id, critere: selection.value, note: null })
  newNote.value = ''}
}

function deleteFunction(index) {
  userGlobale.tabNoteCritere.splice(index, 1)
}
const emit=defineEmits(['refresh'])
function sendRefreshSignal () {
    emit('refresh', props.piste.id)
}

  
</script>
<template>
    <div>
        <section v-if="piste" class="p-6 m-5 rounded-lg shadow-lg/50 shadow-white dark:bg-[#0F172A] text-gray-800 dark:text-[#F8FAFC]">
            
            <h2 class="text-xl font-bold text-gray-400 mb-4 dark:text-[#F8FAFC]">Notation par critère ({{ piste.id }})</h2>

            <form
                class="flex flex-col md:flex-row items-center gap-4 w-full max-w-md"
                @submit.prevent="addFunction()"
            >
                <select
                    class="border border-solid border-gray-400 bg-gray-400 text-white rounded-md p-2 w-full md:w-auto"
                    name="critere"
                    id="critere"
                    v-model="selection"
                >
                    <option value="">Selectionner un critère</option>
                    <option :value="critere" v-for="(critere, ind) in listeCritere" :key="ind">
                        {{ critere }}
                    </option>
                </select>
                <button
                    class="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition"
                    v-if="selection != ''"
                >
                    Ajouter
                </button>
            </form>

            <table
                v-if="userGlobale.tabNoteCritere.length != 0"
                class="border border-solid border-gray-900 w-full text-gray-950 max-w-md text-center mt-4"
            >
                <thead>
                    <tr>
                        <th class="border border-solid border-gray-900 p-2">Critères</th>
                        <th class="border border-solid border-gray-900 p-2">Notes(/5)</th>
                        <th class="border border-solid border-gray-900 p-2">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(crit, index) in userGlobale.tabNoteCritere" :key="index">
                        <td class="border border-solid border-gray-600 p-2">{{ crit.critere }}</td>
                        <td class="border border-solid border-gray-600 p-2">
                            <input
                                class="text-center w-full border border-gray-600 rounded-md p-1"
                                type="number"
                                min="0"
                                max="5"
                                placeholder="Note"
                                v-model.number="crit.note"
                                required
                            />
                        </td>
                        <td class="border border-solid border-gray-600 p-2">
                            <button
                                class="text-red-500 hover:text-red-700 transition"
                                @click="deleteFunction(index)"
                            >
                                ❌
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="flex justify-end mt-5 mr-20">
                <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition" @click="sendRefreshSignal">Appliquer</button>
            </div>
        </section>
    </div>
</template>
