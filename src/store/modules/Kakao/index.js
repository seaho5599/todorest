export default {
  namespaced: true,
  state: {
    email: "",
    profile: {},
    loginState: true,
  },
  actions: {
    LoginKKo({ commit }, { email, profile }) {
      commit("LOGIN_KKO", { email, profile });
    },
    LogoutKKo({ commit }, { email, profile }) {
      commit("LOGOUT_KKO", { email, profile });
    },
  },
  mutations: {
    LOGIN_KKO(state, payload) {
      state.email = payload.email;
      state.profile = payload.profile;
      state.loginState = true;
    },
    LOGOUT_KKO(state) {
      state.email = "";
      state.profile = {};
      state.loginState = false;
    },
  },
  getters: {
    getEmail(state) {
      return state.email;
    },
    getProfile(state) {
      return state.profile;
    },
    getLoginState(state) {
      return state.loginState;
    },
  },
};
