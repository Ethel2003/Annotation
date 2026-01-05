<script setup>
import HeaderApp from '../components/HeaderApp.vue'
import SidebarApp from '../components/SidebarApp.Vue'
import FooterApp from '../components/FooterApp.Vue'
import MainApp from '@/components/MainApp.vue'
</script>

<template>
  <div class="flex flex-col h-screen bg-[#F1F5F9]">
    <div class="main flex w-full overflow-hidden">
      <SidebarApp />
      <div class="flex flex-col justify-between w-full overflow-y-scroll">
        <HeaderApp/>
        <MainApp />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
