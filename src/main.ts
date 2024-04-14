import './assets/main.css'

import { createApp } from 'vue'
import { setupAnimations } from './animations'
// import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faLink);
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
const vm = app.mount("#app");

// Call the animation setup function when the app is mounted
vm.$nextTick(() => {
  setupAnimations();
});
