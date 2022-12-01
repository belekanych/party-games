import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { useVueFire } from './vendor/vuefire';
import { useRouter } from './router';
import { usePinia } from './store';

const app = createApp(App);

useVueFire(app);
useRouter(app);
usePinia(app);

app.mount('#app');
