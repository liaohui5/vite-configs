import { createApp } from 'vue';
import { setupStore } from './store';
import { setupRouter } from './router';
import App from './App.vue';
import 'nprogress/nprogress.css';

function bootstrap(): void {
  const app = createApp(App);
  setupRouter(app);
  setupStore(app);
  app.mount('#app');
}

bootstrap();
