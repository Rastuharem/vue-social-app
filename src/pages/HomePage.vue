<script setup lang="ts"></script>

<template>
  <div
    class="flex h-full w-full flex-col items-center justify-around overflow-auto py-5"
  >
    <section class="flex flex-col items-center">
      <h1
        class="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-9xl text-transparent"
      >
        Social Network App
      </h1>
      <p class="text-3xl">(Created with Vue + Vite)</p>
    </section>
    <nav>Try out <RouterLink to="/posts">Posts</RouterLink></nav>
  </div>
</template>
