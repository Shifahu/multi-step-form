import { createApp } from 'vue'
import App from './App.vue'

//Stores
import { createPinia } from 'pinia';
import router from './router';

const app = createApp(App);
app.use(router);

app.use(createPinia());
app.mount('#app');
// createApp(App).mount('#app')
