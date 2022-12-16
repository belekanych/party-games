import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { useVueFire } from './vendor/vuefire';
import { useRouter } from './router';
import { usePinia } from './store';
import { useFontAwesome } from './vendor/fontawesome';

const app = createApp(App);

usePinia(app);
useFontAwesome(app);
useVueFire(app);
useRouter(app);

app.mount('#app');
