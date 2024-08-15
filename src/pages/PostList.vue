<script setup lang="ts">
import PostCard from "@/components/PostCard.vue";
import usePostsService from "@/composables/services/usePostsService";
import type { IPostList } from "@/types";
import { onMounted, ref } from "vue";

const postsService = usePostsService();
const posts = ref<IPostList>();

onMounted(async () => {
  posts.value = await postsService.getPostList();
});
</script>

<template>
  <div class="h-full w-full overflow-auto p-4">
    <PostCard v-for="post in posts?.posts" :key="post.id" :post="post" />
  </div>
</template>
