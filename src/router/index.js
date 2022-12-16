import routes from './routes';
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../store/auth';

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  const auth = to.matched.some(route => route.meta.auth);
  const guest = to.matched.some(route => route.meta.guest);

  if (auth || guest) {
    const user = await authStore.getCurrentUser();

    if ((user && auth) || (!user && guest)) {
      next();
    } else {
      next(auth ? '/sign-in' : '/');
    }
  } else {
    next(); 
  }
});

export const useRouter = (app) => {
  app.use(router);
};