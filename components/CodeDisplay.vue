<script setup lang="ts">
import { SnippetType } from "~~/types";

const props = defineProps<{
  snippet: SnippetType;
}>();

const getType = (code) => {
  if (code.heading) {
    return code.heading;
  } else {
    switch (code.__component) {
      case "languages.html":
        return "HTML";
      case "languages.css":
        return "CSS";
      case "languages.js":
        return "JavaScript";
      default:
        return "Instructions";
    }
  }
};
</script>

<template>
  <section
    class="code-display h-full space-y-20 overflow-y-scroll rounded-lg p-20"
    v-if="snippet?.attributes?.code"
  >
    <div
      class="overflow-x-scroll rounded-lg"
      :key="index"
      v-for="(code, index) in snippet.attributes.code"
    >
      <h2
        class="pb-5 text-xl font-bold text-gray-900"
        v-text="getType(code)"
      ></h2>
      <Markdown v-if="code.code" :body="code.code" class="h-full w-full" />
    </div>
  </section>
</template>
