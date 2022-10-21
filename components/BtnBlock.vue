<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <button
    v-text="label"
    class="rounded-md border-2 border-gray-50 bg-gray-50 px-15 py-10 text-center text-xl text-gray-800 transition-colors duration-300 hover:bg-transparent hover:text-gray-50"
  ></button>
</template>
