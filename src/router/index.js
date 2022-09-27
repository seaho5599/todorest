import { createRouter, createWebHistory } from "vue-router";
import HomeIndex from "../views/HomeIndex.vue";
import TodosIndex from "../views/TodosIndex.vue";
import TodosView from "../views/TodosView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeIndex,
  },
  {
    path: "/todos",
    name: "Todos",
    component: TodosIndex,
  },
  {
    path: "/todos/:id",
    name: "Todo",
    component: TodosView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
