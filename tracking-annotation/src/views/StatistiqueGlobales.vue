<script setup>
import { ref } from 'vue';
import ListeUserGlobale from '@/components/ListeUserGlobale.vue';
import StatistiqueUserGlobale from '@/components/StatistiqueUserGlobale.vue';
const performanceUser=ref()

</script>

<template>
   <div class="flex items-center">
      <ListeUserGlobale class="w-[30%]" @performance="(msg)=>performanceUser=msg"/>
       <StatistiqueUserGlobale class="w-[70%]" :performanceUser="performanceUser" />
   </div>
</template>

<style scoped></style>