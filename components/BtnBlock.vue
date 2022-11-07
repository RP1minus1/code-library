<script setup lang="ts">
const props = defineProps<{
  label: string;
  outline?: boolean;
}>();
</script>

<template>
  <button
    v-text="label"
    :class="
      outline
        ? 'text-gray-50 hover:bg-gray-50 hover:text-gray-800'
        : 'bg-gray-50 text-gray-800 hover:bg-transparent hover:text-gray-50'
    "
    class="rounded-md border-2 border-gray-50 px-15 py-10 text-center text-xl tracking-wide transition-colors duration-300"
  ></button>
</template>
