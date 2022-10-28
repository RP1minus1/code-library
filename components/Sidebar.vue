<script setup lang="ts">
import { SnippetType, CategoryType, TagType } from "types";

const props = defineProps<{
  components: SnippetType[];
  categories: CategoryType[];
  tags: TagType[];
}>();

const emit = defineEmits<{
  (e: "componentSelect", component: string): void;
}>();

const searchValue = ref("");
const categoryValue = ref("");
const tagValue = ref("");

const emitComponentSelect = (component) => {
  emit("componentSelect", component);
};

const resetInputs = () => {
  searchValue.value = "";
  categoryValue.value = "";
  tagValue.value = "";

  emit("componentSelect", "");
};

const filteredComponents = computed(() => {
  if (!searchValue.value && !categoryValue.value && !tagValue.value) {
    return [];
  }

  const search = searchValue.value.toLowerCase();
  const category = categoryValue.value.toLowerCase();
  const tag = tagValue.value.toLowerCase();

  const categoryFilteredComponents = props.components.filter(
    (component) =>
      component.attributes.categories.data.filter(
        (cat) => cat.attributes.name.toLowerCase() === category
      ).length > 0 ||
      category === "" ||
      category === "all"
  );

  const tagFilteredComponents = categoryFilteredComponents.filter(
    (component) =>
      component.attributes.tags.data.filter(
        (t) => t.attributes.name.toLowerCase() === tag
      ).length > 0 ||
      tag === "" ||
      tag === "all"
  );

  if (Array.isArray(props.components)) {
    return tagFilteredComponents.filter((component) => {
      return component.attributes.name.toLowerCase().includes(search);
    });
  }
});
</script>

<template>
  <div class="relative flex h-full min-w-300 flex-col overflow-y-scroll py-40">
    <div class="relative mb-20 px-20 pb-20">
      <FormInput
        label="Search For Code"
        name="search"
        type="text"
        suffix-icon="search"
        v-model="searchValue"
      />
      <FormSelect
        v-if="categories"
        label="Categories"
        type="select"
        name="categories"
        select-icon="down"
        :options="[
          'All',
          ...categories.map((category) => category.attributes.name),
        ]"
        v-model="categoryValue"
      />
      <FormSelect
        v-if="tags"
        label="Tags"
        type="select"
        name="tags"
        select-icon="down"
        :options="['All', ...tags.map((tag) => tag.attributes.name)]"
        v-model="tagValue"
      />

      <BtnBlock label="Reset" class="mt-15 w-full" @click="resetInputs" />
    </div>

    <div class="flex flex-col space-y-20 px-20">
      <BtnBlock
        v-for="(component, index) in filteredComponents"
        :key="index"
        :label="component.attributes.name"
        @click="emitComponentSelect(component.attributes.name)"
      />
      <!-- <button
        v-for="(component, index) in filteredComponents"
        :key="index"
        v-text="component.attributes.name"
        @click="emitComponentSelect(component.attributes.name)"
        class="py-10 text-2xl text-gray-50 transition-colors duration-300 hover:text-gray-700"
      ></button> -->
    </div>

    <div class="absolute right-0 top-50 bottom-50 w-[2px] bg-white"></div>
  </div>
</template>
