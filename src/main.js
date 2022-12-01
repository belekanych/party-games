import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { useVueFire } from './vendor/vuefire';

const app = createApp(App);

useVueFire(app)

app.mount('#app');
