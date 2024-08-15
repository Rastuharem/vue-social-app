<script setup lang="ts">
interface IProps {
  icon?: {
    src: string;
    size?: number;
    class?: string;
  };
}

const props = defineProps<IProps>();
</script>

<template>
  <button v-bind="$attrs">
    <div
      v-if="props.icon"
      :class="
        props.icon.class ??
        '' +
          ' ' +
          'm-auto transition-all duration-300 hover:cursor-pointer hover:text-neutral-400'
      "
    >
      <i :class="props.icon.src + ' ' + `text-[${props.icon.size ?? 16}px]`" />
    </div>
    <slot />
  </button>
</template>
