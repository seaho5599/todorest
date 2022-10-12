<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="d-flex justify-content-start">
        <RouterLink class="navbar-brand" :to="{ name: 'Home' }"
          >My Todo</RouterLink
        >
        <!-- <RouterLink class="nav-link" :to="{ name: 'Todos' }">Todos</RouterLink> -->
        <!-- <RouterLink class="nav-link" :to="{ name: 'TodoCreate' }"
          >Todo Create</RouterLink
        > -->
        <a class="nav-link" @click="gotoTodos" style="cursor: pointer">Todos</a>
        <a class="nav-link" @click="gotoTodoCreate" style="cursor: pointer"
          >Todo Create</a
        >
        <!-- <RouterLink class="nav-link" :to="{ name: 'About' }">About</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'Profile' }"
          >Profile</RouterLink
        > -->
        <a
          class="nav-link"
          href="https://github.com/seaho5599/todorest"
          target="_blank"
          >Github</a
        >
      </div>
      <!-- <div><Kakao /></div> -->
      <div class="d-flex">
        <a class="nav-link" @click="gotoLogin" style="cursor: pointer"
          >로그인</a
        >
        <a class="nav-link" @click="gotoLogout" style="cursor: pointer"
          >로그아웃</a
        >
        <a class="nav-link" @click="gosignUp" style="cursor: pointer"
          >회원가입</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
// import Kakao from "@/views/KakaoLogin.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: {
    // Kakao,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const error = ref(null);
    const loginState = computed(() => store.getters["login/getLoginState"]);
    const gotoTodos = () => {
      if (!loginState.value) {
        alert("로그인을 하세요.");
        router.push({
          name: "LoginView",
        });
      } else {
        router.push({
          name: "Todos",
        });
      }
      // router.push({
      //   name: "Todos",
      // });
    };
    const gotoTodoCreate = () => {
      if (!loginState.value) {
        alert("로그인을 하세요.");
        router.push({
          name: "LoginView",
        });
      } else {
        router.push({
          name: "Create",
        });
      }
    };
    const gotoLogin = () => {
      router.push({
        name: "LoginView",
      });
    };
    const gotoLogout = async () => {
      try {
        await store.dispatch("login/logOut");
        router.push("/");
      } catch (err) {
        error.value = err.message;
      }
    };
    const gosignUp = () => {
      router.push({
        name: "SignUp",
      });
    };
    return {
      loginState,
      gotoTodos,
      gotoTodoCreate,
      gotoLogin,
      gotoLogout,
      gosignUp,
      error,
    };
  },
};
</script>

<style></style>
