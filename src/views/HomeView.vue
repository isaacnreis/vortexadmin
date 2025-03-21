<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

// Simulação de autenticação para teste
const isAuthenticated = true;

const handleLogin = () => {
  if (isAuthenticated) {
    router.push("/dashboard"); // Redireciona para o painel se estiver autenticado
  } else {
    alert("Usuário não autenticado! (Futuro: Implementar autenticação)");
  }
};
</script>

<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
  >
    <h1 class="text-4xl font-bold mb-4">Bem-vindo ao VortexAdmin</h1>
    <p class="text-lg mb-6">
      Gerencie seus usuários e produtos de forma eficiente.
    </p>

    <button
      @click="handleLogin"
      class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
    >
      Acessar Dashboard
    </button>
  </div>
</template>
