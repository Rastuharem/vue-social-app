<script setup lang="ts">
import CustomButton from "@/components/ui/CustomButton.vue";

type IconSize = "x-small" | "small" | "default" | "large" | "x-large";

const props = withDefaults(
  defineProps<{
    icon: {
      src: string;
      class?: string;
      size?: IconSize;
    };
    count: number;
    isButton?: boolean;
  }>(),
  { isButton: true },
);

const emits = defineEmits<{
  click: [];
}>();
</script>

<template>
  <div class="flex items-center gap-1">
    <CustomButton
      v-if="props.isButton"
      :icon="{
        size: props.icon.size,
        src: props.icon.src,
        class: props.icon.class,
      }"
      @click="emits('click')"
    />
    <div v-else :class="props.icon.class">
      <i :class="props.icon.src" />
    </div>
    <p class="flex items-center">
      {{ props.count }}
    </p>
  </div>
</template>
