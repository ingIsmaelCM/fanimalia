import { createApp } from 'vue'
import './style/app.css'
import App from './App.vue'
import router from './router';
import init from './boot/init';
import primevue from './boot/primevue';
import { Icon } from "@iconify/vue";
import ElementPlus from 'element-plus';
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import es from "@/assets/langs/prime/es.json";
import wind from "@/style/wind";

const app = createApp(App);

app.use(router);
app.component("Icon", Icon);

app.use(ElementPlus);

app.use(createPinia());


init(app);
primevue(app);

app.use(PrimeVue, {
  unstyled: false,
  locale: es,
  pt: wind,
  ripple: true,
});
app.mount("#app");
