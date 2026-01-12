<template>
  <nav
    class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center"
  >
    <!-- Logo / titre -->
    <h1 class="text-xl font-bold">My Dashboard</h1>

    <!-- Liens -->
    <div class="hidden md:flex space-x-6">
      <router-link
        to="/"
        :class="{ underline: isActive('/') }"
        class="hover:underline"
        >Dashboard</router-link
      >
      <router-link
        to="/tasks"
        :class="{ underline: isActive('/tasks') }"
        class="hover:underline"
        >Tasks</router-link
      >
      <router-link
        to="/profile"
        :class="{ underline: isActive('/profile') }"
        class="hover:underline"
        >Profile</router-link
      >
    </div>

    <!-- User + Logout -->
    <div class="flex items-center space-x-4">
      <!-- <span>{{ auth.user?.email }}</span> -->
      <button
        class="bg-blue-800 hover:bg-blue-900 px-3 py-1 rounded"
        @click="logout"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();

function logout() {
  auth.logout();
  router.push("/login");
}

const isActive = (path: string) => route.path === path;
</script>
