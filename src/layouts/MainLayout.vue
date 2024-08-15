<script setup lang="ts">
import MainHeader from "@/components/MainHeader.vue";
</script>

<template>
  <div
    class="flex h-screen w-screen flex-col overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900"
  >
    <MainHeader />
    <main class="flex grow overflow-auto">
      <RouterView />
    </main>
  </div>
</template>
