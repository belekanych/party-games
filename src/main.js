import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { useVueFire } from './vendor/vuefire';
import { useRouter } from './router';

const app = createApp(App);

useVueFire(app);
useRouter(app);

app.mount('#app');
