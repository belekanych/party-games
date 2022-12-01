<script setup>
import { onMounted, ref  } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, user => {
    isLoggedIn.value = !!user; 
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
     router.push('/'); 
  });
};
</script>

<template>
  <nav>
    <router-link to="/"> Home </router-link> | 
    <router-link to="/feed"> Feed </router-link> | 
    <router-link to="/register"> Register </router-link> | 
    <router-link to="/sign-in"> Login </router-link> |
    <button v-if="isLoggedIn"  @click="handleSignOut">Sign out </button>
  </nav>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
