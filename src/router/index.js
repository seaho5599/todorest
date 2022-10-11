import { createRouter, createWebHistory } from "vue-router";
import HomeIndex from "../views/HomeIndex.vue";
import TodosIndex from "../views/TodosIndex.vue";
import TodosView from "../views/TodosView.vue";
import ProfileIndex from "../views/ProfileIndex.vue";
import AboutIndex from "../views/AboutIndex.vue";
import TodoCreate from "../views/TodoCreate.vue";
import Kakao from "../views/KakaoLogin.vue";
import LoginView from "../components/LoginView.vue";
import SignUp from "../components/SignUp.vue";
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
  {
    path: "/profile",
    name: "Profile",
    component: ProfileIndex,
  },
  {
    path: "/about",
    name: "About",
    component: AboutIndex,
  },
  {
    path: "/create",
    name: "Create",
    component: TodoCreate,
  },
  {
    path: "/login",
    name: "Login",
    component: Kakao,
  },
  {
    path: "/loginview",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
