<script setup lang="ts">
import CustomButton from "@/components/ui/CustomButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const handleGitHubClick = () => {
  window.open("https://github.com/Rastuharem/vue-todo-app");
};
</script>

<template>
  <header
    class="flex h-[60px] w-full items-center justify-between bg-slate-900 p-4"
  >
    <nav class="flex w-fit">
      <CustomButton
        class="mx-3"
        title="Home"
        :icon="{ src: 'fas fa-home', size: 'x-large' }"
        @click="router.push('/home')"
      />
      <CustomButton
        class="mx-3"
        title="List"
        :icon="{ src: 'fas fa-list', size: 'x-large' }"
        @click="router.push('/posts')"
      />
    </nav>
    <div>
      <CustomButton
        class="mx-3"
        title="GitHub link"
        :icon="{ src: 'fab fa-brands fa-github', size: 'x-large' }"
        @click="handleGitHubClick"
      />
    </div>
  </header>
</template>
