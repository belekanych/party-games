import routes from './routes';
import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged  } from 'firebase/auth';

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      user => {
        removeListener();
        resolve(user); 
      },
      reject 
    )
  });
};

router.beforeEach(async   (to, from, next) => {
   if (to.matched.some(record => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next(); 
    } else {
      alert('You don\'t have access!');
      next('/'); 
    }
   } else {
    next(); 
   }
});

export const useRouter = (app) => {
  app.use(router);
};