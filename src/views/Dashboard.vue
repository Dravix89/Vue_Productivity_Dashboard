<template>
  <MainLayout>
    <h2 class="text-2xl font-bold mb-6">Bienvenue Sur Ton Dashboard 👋</h2>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard title="Total Tasks" :value="tasks.length" />
      <StatCard title="Tasks Terminées" :value="completedTasks" />
      <StatCard title="Tasks en cours" :value="inProgressTasks" />
    </div>

    <!-- Liste de tasks -->
    <div class="mt-8 bg-white p-6 rounded-xl shadow">
      <h3 class="text-lg font-semibold mb-4">Dernières Tasks</h3>

      <div v-if="loading" class="text-gray-500">Chargement...</div>

      <ul v-else class="space-y-2">
        <TaskItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @toggle="toggleTask"
        />
      </ul>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "../layouts/MainLayout.vue";
import { useTasksStore } from "../stores/tasks";
import { onMounted, computed } from "vue";
import { storeToRefs } from "pinia";

import StatCard from "../components/StatCard.vue";
import TaskItem from "../components/TaskItem.vue";

const tasksStore = useTasksStore();
const { tasks, loading } = storeToRefs(tasksStore);
const { fetchTasks, toggleTask } = tasksStore;

onMounted(() => {
  fetchTasks();
});

const completedTasks = computed(
  () => tasks.value.filter((t) => t.completed).length
);
const inProgressTasks = computed(
  () => tasks.value.filter((t) => !t.completed).length
);
</script>
