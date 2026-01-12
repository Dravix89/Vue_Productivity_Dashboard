<template>
  <MainLayout>
    <h2 class="text-2xl font-bold mb-6">Profile</h2>

    <div
      class="bg-white p-6 rounded-xl shadow w-full md:w-1/2 flex items-center space-x-4"
    >
      <img
        :src="userPhoto"
        alt="User Avatar"
        class="w-20 h-20 rounded-full object-cover"
      />

      <!-- Infos user -->
      <div>
        <p class="mb-2"><strong>Email:</strong> {{ user?.email }}</p>
        <button
          class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "../layouts/MainLayout.vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import userImage from "../assets/user.png";

const auth = useAuthStore();
const router = useRouter();
const user = auth.user;

const userPhoto = userImage;

function logout() {
  auth.logout();
  router.push("/login");
}
</script>
