<script setup lang="ts">
import MainHeader from "@/components/MainHeader.vue";
</script>

<template>
  <div
    class="h-screen w-screen flex-col overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900"
  >
    <MainHeader />
    <main class="flex h-full w-full">
      <RouterView />
    </main>
  </div>
</template>
