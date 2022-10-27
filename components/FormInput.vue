<script setup lang="ts">
const props = defineProps<{
  label: string;
  name: string;
  type: string;
  suffixIcon?: string;
}>();

const emit = defineEmits<{
  (e: "input", value: string): void;
}>();

const inputValue = ref("");
</script>

<template>
  <FormKit
    :label="label"
    :name="name"
    :type="type"
    :suffix-icon="suffixIcon"
    v-model="inputValue"
    @change="emit('input', inputValue)"
    :classes="{
      label: 'text-gray-900 !text-xl !pb-5',
      inner: '!rounded-md bg-gray-50 !shadow-none',
      input: '!text-xl !px-15 !py-10',
    }"
  />
</template>
