<script setup lang="ts"></script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-around">
    <section class="flex flex-col items-center">
      <h1 class="text-9xl">Simple TODO App</h1>
      <p class="text-4xl">(Created with Vue + Vite)</p>
    </section>
    <nav>Try out my <RouterLink to="/list">Task list</RouterLink></nav>
  </div>
</template>
