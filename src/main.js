import { createApp } from 'vue';
import App from './App.vue';
//import router from './router'; // Assurez-vous d'importer le router

const app = createApp(App);

//app.use(router); // Utilisez le router dans votre application

app.mount('#app');
