<script setup lang="ts">
const props = defineProps<{
  label: string;
  name: string;
  type: string;
  suffixIcon?: string;
  selectIcon?: string;
  options: string[];
}>();

const emit = defineEmits<{
  (e: "input", value: string): void;
}>();

const selectValue = ref("");
</script>

<template>
  <FormKit
    :label="label"
    :name="name"
    type="select"
    :suffix-icon="suffixIcon"
    :options="options"
    v-model="selectValue"
    @change="emit('input', selectValue)"
    :classes="{
      label: 'text-gray-900 !text-xl !pb-5',
      inner: '!rounded-md bg-gray-50 !shadow-none',
      input: '!text-xl !px-15 !py-10',
    }"
  />
</template>
