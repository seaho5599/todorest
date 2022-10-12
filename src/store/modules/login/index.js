import { auth } from "@/firebase/index";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default {
  namespaced: true,
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
    loginState: false,
  },
  actions: {
    async register({ commit }, { email, password }) {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        console.log(response.user);
        commit("SET_USER", response.user);
        // response.user.updateProfile({displayName: name,});
      } else {
        throw new Error("Unable to register user");
      }
    },

    async logIn({ commit }, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        console.log(
          "🚀 ~ file: index.js ~ line 36 ~ logIn ~ response",
          response
        );
        commit("SET_USER", response.user);
        commit("LOGIN_STATUS_SUCCESS");
      } else {
        throw new Error("login failed");
      }
    },

    async logOut({ commit }) {
      await signOut(auth);
      commit("SET_USER", null);
      commit("LOGIN_STATUS_LOGOUT");
    },

    async fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        commit("SET_USER", null);
      }
    },
    loginStateSuccess({ commit }) {
      commit("LOGIN_STATUS_SUCCESS");
    },
    loginStateLogout({ commit }) {
      commit("LOGIN_STATUS_LOGOUT");
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
      state.loginState = true;
    },
    SET_USER(state, data) {
      state.user.data = data;
      state.loginState = false;
    },
    LOGIN_STATUS_SUCCESS(state) {
      state.loginState = true;
    },
    LOGIN_STATUS_LOGOUT(state) {
      state.loginState = false;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    getLoginState(state) {
      return state.loginState;
    },
    getLoginLogout(state) {
      return state.loginState;
    },
  },
};
