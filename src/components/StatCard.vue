<template>
  <div class="bg-white p-6 rounded-xl shadow">
    <h3 class="text-lg font-semibold">{{ title }}</h3>
    <p class="text-3xl font-bold mt-2">{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  value: number;
}>();
</script>
