<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";

const auth = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");

async function handleLogin() {
  const success = await auth.login(email.value, password.value);
  if (success) {
    router.push("/"); // Redirige vers mon dashboard !
  } else {
    error.value = "Email ou Mot De Passe Incorrect !";
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow w-96">
      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>

      <input
        type="email"
        v-model="email"
        placeholder="Email"
        class="w-full mb-4 px-4 py-2 border rounded"
      />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        class="w-full mb-6 px-4 py-2 border rounded"
      />

      <!-- Mon message d'erreur -->
      <p v-if="error" class="text-red-500 mb-4">{{ error }}</p>

      <button
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        @click="handleLogin"
      >
        Login
      </button>
    </div>
  </div>
</template>
