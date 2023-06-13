<template>
  <h1>Hello universe</h1>
  <div @click="() => (count += 1)">
    {{ count }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>
