<script setup lang="ts">
import { SnippetType } from "~~/types";

const props = defineProps<{
  snippet: SnippetType;
}>();
</script>

<template>
  <section
    class="code-display h-full w-full overflow-y-scroll p-20"
    v-if="snippet?.attributes?.code"
  >
    <div
      class="overflow-x-scroll"
      :key="index"
      v-for="(code, index) in snippet.attributes.code"
    >
      <Markdown
        v-if="code.code || code.body"
        :body="code.code || code.body"
        class="h-full w-full"
        :class="{
          'mb-20': code.body && code.__component === 'main.instructions',
        }"
      />
    </div>
  </section>
</template>
