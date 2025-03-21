<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore();
const email = ref("");
const password = ref("");

const handleLogin = () => {
  authStore.login(email.value, password.value);
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md w-96">
      <h2 class="text-xl font-semibold mb-4">Login</h2>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full p-2 mb-2 border"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Senha"
        class="w-full p-2 mb-2 border"
      />

      <button @click="handleLogin" class="w-full bg-blue-500 text-white p-2">
        Entrar
      </button>
    </div>
  </div>
</template>
