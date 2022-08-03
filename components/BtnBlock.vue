<script setup lang="ts">
  const props = defineProps<{
    label: string;
  }>();

</script>

<template>
  <button v-text="label" class="px-15 py-10 bg-gray-50 text-center text-gray-800 text-xl rounded-md border-gray-50 border-2 hover:bg-transparent hover:text-gray-50 transition-colors duration-300">
  </button>
</template>