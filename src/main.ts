import { createApp } from "vue";
import ElementPlus from 'element-plus'
import App from "./App.vue";
import router from "./router";
import axios from 'axios';

import './api/mock.js';
import 'element-plus/dist/index.css'
import './assets/index.css';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
// app.config.globalProperties.$axios = axios;
app.provide('$axios', axios); 

app.mount("#app");
