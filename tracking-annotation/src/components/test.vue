<script setup>
import { ref } from 'vue'

const isOpen = ref(false)


</script>

<template>
    <div class="bg-[#0F172A] h-[100vh]">


        <!-- Bouton pour ouvrir la modale -->
        <button @click="isOpen = true" class="bg-[#65D972] p-[1em] cursor-pointer m-[2em] rounded-[0.5em] ">
            <RouterLink />
            <p>Enregistrer les piste audio</p>
        </button>

        <!-- Modale -->
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-1000 "
            @click.self="isOpen = false">
            <div class="bg-white rounded-2xl p-6 shadow-lg max-w-md w-full relative animate-fade-in">
                <!-- Bouton pour fermer -->
                <button @click="isOpen = false" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    ❌
                </button>

                <!-- Contenu de la modale -->
                <h2 class="text-xl font-bold mb-4">Enregistrement de la piste audio</h2>
                <div class="w-full max-w-sm min-w-[200px]">
                    <div class="relative mb-[1em]">
                        <input id="audio-track-id"
                            class="peer w-full bg-transparent placeholder:text-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder=" " />
                        <label for="audio-track-id"
                            class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-950 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-800 peer-focus:scale-90 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-not-placeholder-shown:top-2.5 peer-not-placeholder-shown:left-2.5 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-slate-400">
                            ID de la piste audio
                        </label>
                    </div>
                </div>



                <div class="w-full max-w-sm min-w-[200px]">
                    <div class="relative mb-[1em]">
                        <input
                            class="peer w-full bg-transparent placeholder:text-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                        <label
                            class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-950 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-800 peer-focus:scale-90 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-not-placeholder-shown:top-2.5 peer-not-placeholder-shown:left-2.5 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-slate-400">
                            Durée de la piste audio
                        </label>
                    </div>
                </div>

                <!-- Bouton de confirmation -->
                <button @click="isOpen = false"
                    class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Ajouter
                </button>
            </div>
        </div>
    </div>
</template>
