import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginSuccess: false
  },
  mutations: {
    LOGIN(state, login) {
      state.loginSuccess = login;
    }
  },
  actions: {
    login({ commit }, login) {
      commit('LOGIN', login);
    }
  },
  getters: {
    login: state => state.loginSuccess
  }
});
