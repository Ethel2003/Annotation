<script setup>
import HeaderTable from './HeaderTable.vue'
</script>

<template>
  <div>
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
            Rôles
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
        <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl mx-4 my-2">Liste des rôles</h2>
      </div>
    </div>

    <HeaderTable />
    <table class="w-full text-left">
      <thead class="bg-gray-200 text-white">
        <tr class="text-gray-500 bg-gray-100 text-sm">
          <th class="px-4 py-2 text-left">
            <input type="checkbox" class="form-checkbox text-indigo-600" />
          </th>
          <th class="px-4 py-2 text-left">Identifiant</th>
          <th class="px-4 py-2 text-left">Libellé</th>
          <th class="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-gray-100">
          <td class="px-4 py-2 border-b border-gray-300">
            <input type="checkbox" class="form-checkbox text-indigo-600" />
          </td>
          <td class="p-4 border-b border-gray-300">125440225</td>
          <td class="p-4 border-b border-gray-300">Evaluateurs</td>
          <td class="p-4 border-b border-gray-300">
            <button
              class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Modifier
            </button>
            <button
              class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 ml-2"
            >
              Supprimer
            </button>
          </td>
        </tr>
        <tr class="hover:bg-gray-100">
          <td class="p-4 border-b border-gray-300">
            <input type="checkbox" class="form-checkbox text-indigo-600" />
          </td>
          <td class="p-4 border-b border-gray-300">125440225</td>
          <td class="p-4 border-b border-gray-300">Annotateurs</td>
          <td class="p-4 border-b border-gray-300">
            <button
              class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Modifier
            </button>
            <button
              class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 ml-2"
            >
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
