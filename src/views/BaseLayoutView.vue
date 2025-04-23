<script setup>
import AppFooterView from '@/components/global/AppFooterView.vue';
import AppHeaderView from '@/components/global/AppHeaderView.vue';

    
</script>

<template>
    <div class="flex flex-col h-screen">
    <AppHeaderView/>
    <div class="main flex w-full h-screen overflow-hidden">
      <RouterView name="sidebar"/>
      <div class="flex flex-col justify-between w-full overflow-y-scroll">
        <RouterView />
      </div>
    </div>
    <div class="bottom-0 pt-10">
      <AppFooterView />
    </div>
  </div>
</template>

<style scoped>
    
</style>