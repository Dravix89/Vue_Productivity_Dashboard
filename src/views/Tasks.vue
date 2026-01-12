<template>
  <MainLayout>
    <h2 class="text-2xl font-bold mb-6">Tasks</h2>

    <div v-if="loading" class="text-gray-500">Chargement...</div>

    <ul v-else class="space-y-2">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="flex justify-between items-center border-b py-2"
      >
        <span :class="{ 'line-through text-gray-400': task.completed }">
          {{ task.title }}
        </span>
        <button
          @click="toggleTask(task.id)"
          class="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          {{ task.completed ? "Undo" : "Done" }}
        </button>
      </li>
    </ul>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "../layouts/MainLayout.vue";
import { useTasksStore } from "../stores/tasks";
import { onMounted } from "vue";

const tasksStore = useTasksStore();
const { tasks, fetchTasks, toggleTask, loading } = tasksStore;

onMounted(() => {
  fetchTasks();
});
</script>
