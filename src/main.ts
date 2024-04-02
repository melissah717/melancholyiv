import './assets/main.css'

import { createApp } from 'vue'
import { setupAnimations } from './animations'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

const vm = app.mount("#app");

// Call the animation setup function when the app is mounted
vm.$nextTick(() => {
  setupAnimations();
});
