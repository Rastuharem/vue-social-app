import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import "@/styles/main.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import "@fortawesome/fontawesome-free/css/all.css";
import { fa, aliases } from "vuetify/iconsets/fa";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import router from "@/pages/router";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
  theme: {
    defaultTheme: "dark",
  },
});

const pinia = createPinia();

createApp(App).use(router).use(vuetify).use(pinia).mount("#app");
