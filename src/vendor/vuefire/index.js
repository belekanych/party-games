import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from '../firebase';

export const useVueFire = (app) => {
  app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  });
};