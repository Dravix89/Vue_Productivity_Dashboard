<template>
  <li class="flex justify-between items-center border-b py-2">
    <span :class="{ 'line-through text-gray-400': task.completed }">
      {{ task.title }}
    </span>
    <button
      @click="$emit('toggle', task.id)"
      class="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
    >
      {{ task.completed ? "Undo" : "Done" }}
    </button>
  </li>
</template>

<script setup lang="ts">
import type { Task } from "../types";

const props = defineProps<{
  task: Task;
}>();
</script>
