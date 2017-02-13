import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginSuccess: false,
    connected: false
  },
  mutations: {
    LOGIN(state, login) {
      state.loginSuccess = login
    },
    CONNECT(state, payload) {
      state.connected = payload
    }
  },
  actions: {
    login({commit}, login) {
      commit('LOGIN', login)
    },

    connect({commit}, value) {
      commit('CONNECT', value)
    }
  },
  getters: {
    login: state => state.loginSuccess,
    connect: state => state.connected
  }
})
