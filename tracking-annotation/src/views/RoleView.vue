<script setup>
import { ref } from 'vue'


const roles = ref([])
let rename = ref('true')
const userRole = ref('')
let currentIndex = ref('')

const addRole = function () {
  roles.value.push(userRole.value)
  userRole.value = ''
}
const renameRole = function (role, index) {
  currentIndex.value = index
  userRole.value = role

}
const validateRole = function () {
  roles.value[currentIndex.value] = userRole.value
  userRole.value = ''
}
const delRole = function (index) {
  roles.value.splice(index, 1)
}
</script>

<template>
  <div>
    <form action="">
      <input v-model="userRole" type="text" placeholder="rôle de l'utilisateur">  
    </form>
    <button @click="addRole">Ajouter</button>
    <button @click="validateRole">Valider</button>

    <ul>
      <li v-for="(role, index) in roles" :key="index">
        <span>{{ role }}</span>
        <button @click="renameRole(role, index)">Modifier</button>
        <button @click="delRole(index)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>