<script setup lang="ts">
import { useUserService } from "@/composables/services/useUserService";
import type { IUser } from "@/types";
import { onMounted, ref } from "vue";

const props = defineProps<{
  userId: number;
}>();

const userService = useUserService();
const user = ref<IUser>();

onMounted(async () => {
  user.value = await userService.getUser(props.userId);
});
</script>

<template>
  <div class="flex h-full w-full items-center justify-between">
    <div class="flex items-center gap-3">
      <img :src="user?.image" class="h-[70px] w-[70px] rounded-full" />
      <div class="flex flex-col">
        <div class="text-2xl font-bold">
          {{ user?.firstName + " " + user?.lastName }}
        </div>
        <div>{{ "@" + user?.username }}</div>
      </div>
    </div>
    <div>subscribe</div>
  </div>
</template>
