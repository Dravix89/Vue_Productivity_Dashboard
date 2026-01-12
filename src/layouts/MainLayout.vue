<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav
      class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md"
    >
      <!-- Logo / Titre -->
      <div class="flex items-center space-x-4">
        <h1 class="text-xl font-bold">My Dashboard</h1>

        <!-- Liens desktop -->
        <div class="hidden md:flex space-x-6">
          <router-link
            to="/"
            class="hover:text-gray-200"
            :class="{ 'border-b-2 border-white': isActive('/') }"
            >Dashboard</router-link
          >
          <router-link
            to="/tasks"
            class="hover:text-gray-200"
            :class="{ 'border-b-2 border-white': isActive('/tasks') }"
            >Tasks</router-link
          >
          <router-link
            to="/profile"
            class="hover:text-gray-200"
            :class="{ 'border-b-2 border-white': isActive('/profile') }"
            >Profile</router-link
          >
        </div>
      </div>

      <!-- User info + Logout -->
      <div class="flex items-center space-x-4">
        <!-- <span class="hidden sm:inline">{{ auth.user?.email }}</span> -->
        <button
          class="bg-blue-800 hover:bg-blue-900 px-3 py-1 rounded transition-colors"
          @click="logout"
        >
          Logout
        </button>

        <!-- Hamburger menu mobile -->
        <button class="md:hidden ml-2" @click="mobileOpen = !mobileOpen">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Menu mobile -->
    <transition name="fade">
      <div
        v-if="mobileOpen"
        class="bg-blue-600 text-white flex flex-col space-y-2 px-6 py-4 md:hidden"
      >
        <router-link to="/" @click="mobileOpen = false" class="py-1"
          >Dashboard</router-link
        >
        <router-link to="/tasks" @click="mobileOpen = false" class="py-1"
          >Tasks</router-link
        >
        <router-link to="/profile" @click="mobileOpen = false" class="py-1"
          >Profile</router-link
        >
      </div>
    </transition>

    <!-- Main content -->
    <main class="flex-1 p-6 bg-gray-100">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();

const mobileOpen = ref(false);

function logout() {
  auth.logout();
  router.push("/login");
}

// Surligner le lien actif
const isActive = (path: string) => route.path === path;
</script>

<style>
/* Transition simple pour le menu mobile */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
