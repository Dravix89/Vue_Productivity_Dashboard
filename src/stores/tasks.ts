// tasks.ts → appels MÉTIER (getTasks, createTask, etc.)
// Autant de fichiers métier que j'ai besoin (👉 LOGIQUE TASKS UNIQUEMENT)

import { defineStore } from "pinia";
import { ref } from "vue";
import api from "../api/axios";
import type { Task } from "../types";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref<Task[]>([]);
  const loading = ref(false);

  async function fetchTasks() {
    loading.value = true;
    const res = await api.get("/todos?_limit=5"); // jsonplaceholder
    tasks.value = res.data;
    loading.value = false;
  }

  function toggleTask(id: number) {
    const task = tasks.value.find((t) => t.id === id);
    if (task) task.completed = !task.completed;
  }

  return { tasks, loading, fetchTasks, toggleTask };
});
