<script setup lang="ts">
import { ref } from "vue";
import { useProductsStore, type Product } from "../stores/productsStore";
import DashboardLayout from "../layouts/DashboardLayout.vue";

const productsStore = useProductsStore();

// Novo produto temporário para adicionar na lista
const newProduct = ref<Product>({ id: 0, name: "", price: 0, stock: 0 });

const addProduct = () => {
  if (newProduct.value.name && newProduct.value.price > 0) {
    newProduct.value.id = Date.now();
    productsStore.addProduct({ ...newProduct.value });
    newProduct.value = { id: 0, name: "", price: 0, stock: 0 };
  } else {
    alert("Preencha os campos corretamente!");
  }
};

const deleteProduct = (id: number) => {
  productsStore.removeProduct(id);
};
</script>

<template>
  <DashboardLayout>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Gerenciar Produtos</h1>

      <div class="mb-6 p-4 bg-gray-100 rounded-lg">
        <h2 class="font-semibold mb-2">Adicionar Novo Produto</h2>
        <input
          v-model="newProduct.name"
          placeholder="Nome"
          class="border p-2 w-full mb-2"
        />
        <input
          v-model="newProduct.price"
          type="number"
          placeholder="Preço"
          class="border p-2 w-full mb-2"
        />
        <input
          v-model="newProduct.stock"
          type="number"
          placeholder="Estoque"
          class="border p-2 w-full mb-2"
        />
        <button @click="addProduct" class="bg-green-500 text-white px-4 py-2">
          Adicionar
        </button>
      </div>

      <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <th class="border border-gray-300 p-2">ID</th>
            <th class="border border-gray-300 p-2">Nome</th>
            <th class="border border-gray-300 p-2">Preço</th>
            <th class="border border-gray-300 p-2">Estoque</th>
            <th class="border border-gray-300 p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productsStore.products" :key="product.id">
            <td class="border border-gray-300 p-2">{{ product.id }}</td>
            <td class="border border-gray-300 p-2">{{ product.name }}</td>
            <td class="border border-gray-300 p-2">
              R$ {{ product.price.toFixed(2) }}
            </td>
            <td class="border border-gray-300 p-2">{{ product.stock }}</td>
            <td class="border border-gray-300 p-2">
              <button
                class="bg-red-500 text-white px-3 py-1"
                @click="deleteProduct(product.id)"
              >
                🗑️ Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DashboardLayout>
</template>
