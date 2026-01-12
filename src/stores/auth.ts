import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "../types";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const isLoggedIn = ref(false);

  // Récupération (infos user) depuis localStorage au démarrage !
  const saved = localStorage.getItem("user");
  if (saved) {
    user.value = JSON.parse(saved);
    isLoggedIn.value = true;
  }

  async function login(email: string, password: string) {
    // Vérifie l’email et le password !
    if (email === "test@example.com" && password === "123456") {
      user.value = { id: 1, email };
      isLoggedIn.value = true;
      localStorage.setItem("user", JSON.stringify(user.value));
      return true;
    } else {
      return false; // mauvais email ou password !
    }
  }

  function logout() {
    user.value = null;
    isLoggedIn.value = false;
    // Supprime ma session !
    localStorage.removeItem("user");
  }

  return { user, isLoggedIn, login, logout };
});
