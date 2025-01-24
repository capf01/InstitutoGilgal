import { createApp } from 'vue';  // Importa o Vue
import App from './App.vue';  // Importa o componente raiz da aplicação
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa o CSS do Bootstrap
import 'bootstrap';  // Importa os scripts JS do Bootstrap
import router from '@/router/index';  // Importa o Vue Router configurado

// Cria a aplicação Vue, usa o Vue Router e monta no elemento #app
createApp(App)
  .use(router)  // Usa o Vue Router
  .mount('#app');  // Monta a aplicação no elemento com id "app"
