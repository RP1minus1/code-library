<script setup lang="ts">
import { SnippetType } from "~~/types";

const props = defineProps<{
  snippet: SnippetType;
}>();

watch(
  () => props.snippet,
  (newValue) => {
    console.log(newValue?.attributes?.code[0]?.code);
  }
);
</script>

<template>
  <section class="code-display h-full w-full p-20 overflow-y-scroll" v-if="snippet && snippet.attributes && snippet.attributes.code">
    <div class="" :key="index" v-for="(code, index) in snippet.attributes.code">
      <Markdown
        v-if="code.code || code.body"
        :body="code.code || code.body"
        class="h-full w-full"
        :class="{'mb-20': code.body && code.__component === 'main.instructions'}"
      />
    </div>
  </section>
</template>
