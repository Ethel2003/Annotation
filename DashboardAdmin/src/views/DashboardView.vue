<script setup>
import HeaderApp from '../components/HeaderApp.Vue'
import SidebarApp from '../components/SidebarApp.Vue'
import FooterApp from '../components/FooterApp.Vue'
import MainApp from '@/components/MainApp.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <HeaderApp />
    <div class="main flex w-full h-screen">
      <SidebarApp />
      <div class="flex flex-col justify-between w-full">
        <MainApp />
        <FooterApp class="fixed bottom-0" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
