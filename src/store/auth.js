import { defineStore } from 'pinia';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: null,
    user: null,
  }),
  getters: {
    isLoggedIn: state => !!state.user,
  },
  actions: {
    increment() {
      this.count++
    },

    init () {
      return new Promise((resolve, reject) => {
        const auth = getAuth();
        onAuthStateChanged(auth, user => {
          this.user = user;
          this.auth = auth;
          resolve(this.user);
        }, reject);
      });
    },

    getCurrentUser () {
      return new Promise((resolve, reject) => {
        if (this.auth) {
          resolve(this.user);
          return;
        }

        this.init()
          .then(resolve)
          .catch(reject);
      });
    },

    logout () {
      return signOut(this.auth);
    },
  },
});