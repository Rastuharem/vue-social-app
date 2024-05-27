import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./pages/router";
import App from "./App.vue";
import "./main.css";

createApp(App).use(router).use(createPinia()).mount("#app");
