import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Autobus from "../views/Autobus.vue";
import Tram from "../views/Tram.vue";
import Trolleybus from "../views/Trolleybus.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/autobus",
    name: "Autobus",
    component: Autobus
  },
  {
    path: "/tram",
    name: "Tram",
    component: Tram
  },
  {
    path: "/trolleybus",
    name: "Trolleybus",
    component: Trolleybus
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
