<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';

const authStore = useAuthStore();

const router = useRouter();

const logout = () => {
  authStore.logout().then(() => {
    router.push('/');
  });
};
</script>

<template>
  <h1 class="font-bold text-5xl mb-4">Profile</h1>
  <div
    v-if="authStore.user"
    class="flex mb-4"
  >
    <img
      class="bg-white shrink-0 border-2 border-black rounded-md shadow-brutal mr-4"
      :src="authStore.user.photoURL"
    />
    <div class="bg-white flex-1 border-2 border-black rounded-md shadow-brutal flex flex-col justify-center p-2">
      <h2 class="font-bold text-xl">{{ authStore.user.displayName }}</h2>
      <p class="text-sm">{{ authStore.user.email }}</p>
    </div>
  </div>
  <button
    class="block bg-white w-full p-2 border-2 border-black rounded-md shadow-brutal font-bold mb-4"
    @click="logout"
  >
    <font-awesome-icon
      class="mr-4"
      icon="fa-solid fa-right-from-bracket"
    />
    Logout
  </button>
</template>