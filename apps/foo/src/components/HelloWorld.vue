<template>
  <h1 v-html="'Hello universe'" />
    <div @click="() => count += 1">
    {{ count }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

const example = () => {
  return "example";
};
</script>
