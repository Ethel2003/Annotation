<script setup></script>

<template>
     
     <!-- Search & Actions -->
     <div class="flex items-center justify-between mb-4 ml-4">
      <div class="relative w-1/3 flex justify-between">
        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          type="text"
          placeholder="Rechercher un utilisateur"
        />

        <div class="flex items-center space-x-2 ml-5 border-l border-l-gray-300 text-gray-500 pl-2">
          <a
            href="#"
            class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-300 hover:bg-gray-100 dark:hover:text-gray-900"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>

          <a
            href="#"
            class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-300 hover:bg-gray-100 dark:hover:text-gray-900"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>

          <a
            href="#"
            class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-300 hover:bg-gray-100 dark:hover:text-gray-900"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>

          <a
            href="#"
            class="inline-flex justify-center p-1text-gray-500 rounded cursor-pointer hover:text-gray-300 hover:bg-gray-100 dark:hover:text-gray-900"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex gap-2">
        <button class="bg-blue-600 text-white px-4 py-2 font-bold rounded-lg">+ Ajouter</button>
        <button
          class="border px-3 py-2 mx-2 rounded-lg flex items-center font-semibold border-gray-300"
        >
          <svg
            class="w-5 h-5 mr-2 -ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Exporter
        </button>
      </div>
    </div>
</template>

<style scoped></style>
