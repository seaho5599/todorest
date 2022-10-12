export default {
  namespaced: true,
  state: {
    email: "",
    profile: {},
    loginState: false,
  },
  actions: {
    loginKKO({ commit }, { email, profile }) {
      console.log("--------------");
      console.log(email);
      console.log(profile);
      commit("LOGIN_KKO", { email, profile });
    },
    logOutKKO({ commit }) {
      commit("LOGOUT_KKO");
    },
    loginStateSuccess({ commit }) {
      commit("LOGIN_STATUS_SUCCESS");
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
    LOGIN_STATUS_SUCCESS(state) {
      state.loginState = true;
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
