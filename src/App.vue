<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <div>
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <RouterView />
    </Transition>
  </div>
  
</template>

<style scoped>

</style>
