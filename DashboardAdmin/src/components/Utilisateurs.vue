<script setup>
import { ref } from 'vue';
import HeaderTable from './HeaderTable.vue'
import { users,roles } from '@/data/userData';
import Swal from 'sweetalert2'

let showForm = ref(false);
let isAdd = ref(false)
let newFirstName = ref('');
let newLastName = ref('');
let newLogin = ref('');
let newPassword = ref('');
let newRuleId = ref('');
let actuelId = ref();

function displayRole(id){
    const UserRole= roles.value.find(r=> r.id === id)
    if (UserRole){
        return UserRole.libelleRole
    }
    else {
       
        console.log(`ce role n'existe pas`)
        return 'user'
    }
}

const closeForm = () => {
    showForm.value = false
    newFirstName.value = '';
    newLastName.value = ''
    newLogin.value = ''
    newPassword.value = ''
    newRuleId.value = ''
    
}


//Fonction pour supprimer une ligne du tableau
function deleteLine(index) {
    Swal.fire({
        title: "Voulez-vous supprimer la tache?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui!"
    }).then((result) => {
        if (result.isConfirmed) {
            users.value.splice(index, 1);
            Swal.fire({
                title: "Supprimer!",
                text: "L'élement a été supprimé avec succès.",
                icon: "success"
            });
        }
    });

}

//Fonction pour ouvrir le formulaire de modification
const openUpadateForm = (isModif, user = {}, index = '') => {
    if (isModif) {
        isAdd.value = false
        newFirstName.value = user.firstName
        newLastName.value = user.lastName
        newLogin.value = user.login
        newPassword.value = user.password
        newRuleId.value = user.role_id
        actuelId.value = index

    }else {
        isAdd.value = true;
    }
    showForm.value = true;
    console.log('index:', index)
    
}

// Fonction pour modifier la ligne selectionnée 

function validatedUpdateUser(){
    let user = users.value[actuelId.value]
    user.firstName = newFirstName.value 
    user.lastName = newLastName.value
    user.login = newLogin.value 
    user.password = newPassword.value
    user.role_id = newRuleId.value 

    console.log('actuel id: ',actuelId)
}


// FONCTION POUR AJOUTER UN UTILISATEUR
function addUser() {
    if (
        newFirstName.value.trim() != '' &&
        newFirstName.value.trim() != '' &&
        newLastName.value.trim() != '' &&
        newLogin.value.trim() != '' &&
        newPassword.value.trim() != ''
        // newRuleId.value != ''
    ) 
    {
      let checkLogin = users.value.find(l=> l.login === newLogin.value)
      if(checkLogin){
        alert(`Ce login existe déja, veillez choissir un autre.`)
        console.log(`Ce login existe déja, veillez choissir un autre.`);
        
      }else{ 
        users.value.push({
            // id: id,
            firstName: newFirstName.value,
            lastName: newLastName.value.toUpperCase(),
            login: newLogin.value,
            password: newPassword.value,
            role_id: newRuleId.value
        })
        newFirstName.value = '';
        newLastName.value = ''
        newLogin.value = ''
        newPassword.value = ''
        newRuleId.value = ''   
    }
      }
        else {
        alert("Veuillez renseigner les champs")
    }
    
}
</script>

<template>
  <div class="p-1">

     <!-- Header -->
     <div class="flex items-center justify-between mb-6">
      <div>
        <div class="flex mx-4 my-2 items-center justify-center">
          <svg
            class="w-6 h-6 mr-2.5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            ></path>
          </svg>
          <nav class="text-md text-gray-500 mt-1 ml-4 flex gap-1.5">
            Home
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Users
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            List
          </nav>
        </div>
        <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl mx-4 my-2">
          Liste des utilisateurs
        </h2>
      </div>
    </div>

    <HeaderTable @response="showForm=true ; isAdd=true" />


  <!-- Section pour afficher le formulaire d'ajout -->

    <section v-if="showForm">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

        <article class="fixed inset-0 z-10 overflow-y-auto w-screen flex items-center justify-center h-screen">
            <div class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-semibold text-center text-gray-700">Formulaire d'ajout d'un utilisateur</h2>
                    <div class="my-4 flex justify-end">
                        <button class="flex gap-4 px-4 py-1 font-bold rounded-md" @click="closeForm()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                <path fill="red"
                                    d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <form>
                    <!-- Champ nom de l'utilisateur-->
                    <div class="mb-4">
                        <label for="nom" class="block text-gray-700 font-medium mb-2">Nom de l'utilisateur</label>
                        <input type="text" id="nom" name="nom" v-model="newFirstName"
                            class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Entrez le nom de l'utilisateur" required>
                    </div>

                    <!-- Champ prenom de l'utilisateur -->
                    
                    <div class="mb-4">
                        <label for="nom" class="block text-gray-700 font-medium mb-2">Prénom de l'utilisateur</label>
                        <input type="text" id="nom" name="nom" v-model="newLastName"
                            class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Entrez le prénom de l'utilisateur" required>
                    </div>

                    
                    <!-- Champ login -->
                    <div class="mb-4">
                        <label for="nom" class="block text-gray-700 font-medium mb-2">Login</label>
                        <input type="text" id="nom" name="nom" v-model="newLogin"
                            class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Entrez le login de l'utilisateur" required>
                    </div>
                    <!-- Champ password -->
                    <div class="mb-4">
                        <label for="nom" class="block text-gray-700 font-medium mb-2">Password</label>
                        <input type="text" id="nom" name="nom" v-model="newPassword"
                            class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Entrez le password de l'utilisateur" required>
                    </div>

                    <!-- Champ role -->
                    <div class="mb-4">
                        <label for="nom" class="block text-gray-700 font-medium mb-2">Rôle</label>                                                     

                        <select v-model="newRuleId"  name="nom" id="nom" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">--Choisir un rôle--</option>
                            <option v-for="role in roles" v-bind:value="role.id" placeholder="dfdf">
                                {{ role.libelleRole }}
                            </option>
                            </select>
                            <!-- <span>Sélectionné : {{ newRuleId }}</span> -->

                    </div>
                    
                  
                    <!-- Boutons -->
                    <div class="flex justify-between mt-6 gap-4">
                        <button type="submit" v-if="isAdd" @click.prevent="addUser(); closeForm()" 
                            class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Envoyer
                        </button>

                        <button class="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500" 
                        v-else @click.prevent="validatedUpdateUser(); closeForm()">Modifier</button>
                        <button type="reset"
                            class="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500">Vider
                            le formulaire</button>
                    </div>
                </form>
            </div>
        </article>
</section>

    <!-- Users Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-left">
        <thead class="">
          <tr class="text-gray-500 bg-gray-100 text-sm border">
            <th class="pl-4"><input type="checkbox" /></th>
            <th class="p-4">Nom</th>
            <th class="p-4">Prénom</th>
            <th class="p-4">Login</th>
            <th class="p-4">Mot de passe</th>
            <th class="p-4">Isldap</th>
            <th class="p-4">Role</th>
            <th class="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user,index) in users" :key="index">
            <td class="p-4 border-b border-gray-300"><input type="checkbox" /></td>
            <td class="p-4 border-b border-gray-300">{{ user.lastName }}</td>
            <td class="p-4 border-b border-gray-300">{{ user.firstName }}</td>
            <td class="p-4 border-b border-gray-300">{{ user.login }}</td>
            <td class="p-4 border-b border-gray-300">**********</td>
            <!-- <td class="p-4 border-b border-gray-300">{{ user.password }}</td> -->

            <td class="p-4 border-b border-gray-300">
              <span
                :class="[
                  'inline-block px-2 py-1 text-xs font-semibold rounded',
                  user.isldap ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600',
                ]"
              >
                {{ user.isldap ? 'Oui' : 'Non' }}
              </span>
            </td>
            <td class="p-4 border-b border-gray-300">{{ displayRole(user.role_id )}}</td>

      
            <td class="p-4 flex gap-2 border-b border-gray-300">
              <button @click.prevent="openUpadateForm(true, user, index)"
                class="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
                  />
                </svg>
                Modifier
              </button>
              <button @click="deleteLine(index)"
                class="bg-red-600 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17"
                  />
                </svg>
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 10px;
}
</style>
