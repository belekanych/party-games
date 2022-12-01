import { createPinia } from 'pinia';

const pinia = createPinia();

export const usePinia = (app) => {
  app.use(pinia);
};