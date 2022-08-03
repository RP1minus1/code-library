<script setup lang="ts">
import { ref } from "vue";
import { SnippetDataType, CategoryDataType, TagDataType } from "types";

const { data: snippets } = await useFetch<SnippetDataType>(
  "http://localhost:1337/api/snippets?populate=*"
);
const { data: categories } = await useFetch<CategoryDataType>(
  "http://localhost:1337/api/categories"
);
const { data: tags } = await useFetch<TagDataType>(
  "http://localhost:1337/api/tags"
);

const activeSnippet = ref(null);

const setActiveComponent = (component: string) => {
  if (component && snippets?.value?.data && Array.isArray(snippets.value.data)) {
    const activeComponent = snippets?.value?.data?.find(
      (c) => c.attributes.name === component
    );
    if (activeComponent) {
      activeSnippet.value = activeComponent;
    }
  } else {
    activeSnippet.value = null;
  }
};
</script>

<template>
  <div class="flex h-screen w-full flex-auto">
    <Sidebar
      :components="snippets.data"
      :categories="categories.data"
      :tags="tags.data"
      @componentSelect="setActiveComponent"
    />
    <CodeDisplay :snippet="activeSnippet" />
  </div>
</template>
