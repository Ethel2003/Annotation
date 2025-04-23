<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { users,roles } from '../data/userData'
 
const loginInput = ref('')
const passwordInput = ref('')
const errorMessage = ref('')
const router = useRouter()
 
/**
 * fonction pour se connecter
 */
function login() {
  const user = users.value.find(
    u => (u.login === loginInput.value) && (u.password === passwordInput.value)
  )
 
  if (!user) {
    errorMessage.value = 'Identifiant ou mot de passe incorrect.'
  } else {
  console.log('user connecté');
    
    errorMessage.value = ''
//enregistrer les données de l'utilisateur dans localStorage
    localStorage.setItem('currentUser', JSON.stringify(user))
    router.push(`/${roles.value[user.role_id-1].libelleRole}`) // redirection vers /admin ou /annotateur ou /evaluateur
  }
}

</script>

<template>
    <div class="h-screen flex justify-center items-center bg-[#F8FAFC]">
      <div class="w-full max-w-6xl flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-white from-50% to-[#1b3253] shadow-xl h-full md:h-[60%]  to-50% rounded-2xl">
        
        <!-- Section Logo (30% hauteur sur mobile) -->
        <section class="flex items-center justify-center w-full md:w-1/2 h-[30%] md:h-full bg-[#ffffff] text-white md:rounded-br-[8em] md:rounded-l-2xl">
          <img class="w-[20em] md:w-[400px] text-[#1b314eec]" src="../assets/image/logo.svg" alt="Logo phonéos">
        </section>
  
        <!-- Section Formulaire (70% hauteur sur mobile) -->
        <section class="form w-full md:w-1/2 h-[70%] md:h-full p-6 md:p-9 bg-[#1b314e] md:rounded-tl-[8em] md:rounded-r-2xl">
          <h1 class="text-center mt-20 md:mt-9 font-bold text-white text-2xl md:text-3xl">Sign In</h1>
          
          <form @submit.prevent="login"  class="w-full mt-2 md:mt-0 flex flex-col justify-center items-center h-[80%]">
            <div class="user flex flex-col mb-6 w-full md:w-96">
              <label class="m-1.5 font-semibold text-white" for="username">Username</label>
              <div class="flex bg-[#CBD5E1] border-[#CBD5E1] justify-between rounded-sm">
                <img src="../assets/image/user.svg" alt="Icône user" class="w-10 h-full p-2">
                <input  v-model="loginInput" class="focus:outline-none p-2 w-full bg-transparent" type="text" id="username" name="username" placeholder="Enter your username" required>
              </div>
            </div>
  
            <div class="password flex flex-col mb-6 w-full md:w-96">
              <label class="m-1.5 font-semibold text-white" for="password">Password</label>
              <div class="flex bg-[#CBD5E1] border-[#CBD5E1] justify-between rounded-sm">
                <img src="../assets/image/password.svg" alt="Icône password" class="w-10 h-full p-2">
                <input  v-model="passwordInput"  class="focus:outline-none p-2 w-full bg-transparent" type="password" id="password" name="password" placeholder="Enter your password" required>
              </div>
            </div>

            <p  v-if="errorMessage" class="text-white text-start"> {{ errorMessage }}</p>

  
            <button class="bg-[#c6d5f541] hover:bg-[#7a8bad] text-white p-3 w-32 rounded-sm mt-4 md:mt-12 cursor-pointer">Sign in</button>
          </form>
        </section>
      </div>
    </div>
  </template>

<style scoped>

</style>