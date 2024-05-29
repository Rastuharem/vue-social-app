<script setup lang="ts">
import { VIcon } from "vuetify/components";

type IconSize = "x-small" | "small" | "default" | "large" | "x-large";

interface IProps {
  icon?: {
    src: string;
    size?: IconSize;
  };
}

const props = defineProps<IProps>();
</script>

<template>
  <button v-bind="$attrs">
    <VIcon
      v-if="props.icon"
      :size="props.icon.size"
      :icon="props.icon.src"
      class="m-auto transition-all duration-300 hover:cursor-pointer hover:text-neutral-400"
    />
    <slot />
  </button>
</template>
