import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import "bootstrap/dist/css/bootstrap.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: OpenPage },
    { path: "/offers", IngatlanKinalat },
  ],
});

const app = createApp(App);
app.use(router);
import "bootstrap/dist/js/bootstrap";
app.mount("#app");
