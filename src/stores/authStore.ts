import { defineStore } from "pinia";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const router = useRouter();

  // Monitora mudanças na autenticação
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });

  // Login com email e senha
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/home"); // Redireciona após login
    } catch (error) {
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return { user, login, logout };
});
