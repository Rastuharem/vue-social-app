<script setup lang="ts">
import type { IPost } from "@/types";
import PostUserHeader from "@/components/PostUserHeader.vue";
import PostReaction from "@/components/PostReaction.vue";
import { useReactions } from "@/composables/useReactions";
import { computed } from "vue";

const props = defineProps<{
  post: IPost;
}>();

const [likes, like, hasLiked] = useReactions(props.post.reactions.likes);
const [dislikes, dislike, hasDisliked] = useReactions(
  props.post.reactions.dislikes,
);

const likeClass = computed(() =>
  hasLiked.value ? "text-red-500 hover:text-red-400" : "",
);

const dislikeClass = computed(() =>
  hasDisliked.value ? "text-blue-500 hover:text-blue-400" : "",
);

const handleLikeClick = () => {
  if (hasDisliked.value) {
    dislike();
  }
  like();
};

const handleDislikeClick = () => {
  if (hasLiked.value) {
    like();
  }
  dislike();
};
</script>

<template>
  <div
    class="my-4 h-fit w-full rounded-md border-2 border-solid border-slate-300 p-2"
  >
    <div class="h-fit p-2">
      <PostUserHeader :user-id="props.post.userId" />
    </div>
    <div class="p-2">
      <h2 class="my-2 text-3xl">{{ props.post.title }}</h2>
      <h3>{{ props.post.body }}</h3>
    </div>
    <div class="flex items-center justify-between p-2">
      <div class="flex gap-4">
        <PostReaction
          :icon="{
            src: 'fa-solid fa-heart',
            size: 'small',
            class: likeClass,
          }"
          :count="likes"
          @click="handleLikeClick"
        />
        <PostReaction
          :icon="{
            src: 'fa-solid fa-heart-crack',
            size: 'small',
            class: dislikeClass,
          }"
          :count="dislikes"
          @click="handleDislikeClick"
        />
        <PostReaction
          :icon="{ src: 'fa-solid fa-comment', size: 'small' }"
          :count="-1"
        />
      </div>
      <div class="flex">
        <PostReaction
          :icon="{ src: 'fa-solid fa-eye', size: 'small' }"
          :count="props.post.views"
          :is-button="false"
        />
      </div>
    </div>
  </div>
</template>
