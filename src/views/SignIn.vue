<script setup>
import { ref } from 'vue';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');
const errMsg = ref(''); 

const login = () => {
    signInWithEmailAndPassword (getAuth(), email.value, password.value)
    .then(data => {
      console.log('Successfully signed in!');
      router.push('/feed');
    })
    .catch(error => {
      console.error(error.code);
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email';
          break;
        case 'auth/user-not-found':
          errMsg.value = 'No account with that email was found';
          break;
        case 'auth/wrong-password':
          errMsg.value = 'Incorrect password';
          break;
        default:
          errMsg.value = 'Email or password was incorrect';
          break; 
      }
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(getAuth(), provider)
    .then(() => {
      router.push('/feed'); 
    })
    .catch(() => {});
};
</script>

<template>
  <h1 class="text-5xl font-bold mb-4">Sign in</h1>
  <div class="mb-8">
    <input
      class="block bg-white w-full p-2 border-2 border-black rounded-md shadow-brutal font-bold mb-4"
      type="email"
      placeholder="Email"
      v-model="email"
    />
    <input
      class="block bg-white w-full p-2 border-2 border-black rounded-md shadow-brutal font-bold mb-4"
      type="password"
      placeholder="Password"
      v-model="password"
    />
    <p
      v-if="errMsg"
      class="block bg-red text-white shadow-black w-full p-2 border-2 border-black rounded-md shadow-brutal font-bold mb-4"
    >
      {{ errMsg }}
    </p>
  </div>
  <button
    class="block bg-white w-full p-2 border-2 border-black rounded-md shadow-brutal font-bold mb-4"
    @click="login"
  >
    Sign In
  </button>
  <button
    class="block bg-white w-full p-2 border-2 border-black rounded-md shadow-brutal font-bold"
    @click="signInWithGoogle"
  >
    <font-awesome-icon
      class="mr-4"
      icon="fa-brands fa-google"
    />
    Sign in with Google
  </button>
</template>