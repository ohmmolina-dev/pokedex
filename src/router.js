import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import List from "./views/List.vue";

const routes = [
   { path: '/', component: Home},
   { path: '/list', component: List},
];

const history = createWebHistory();

const router = createRouter({
   history,
   routes,
});

export default router;