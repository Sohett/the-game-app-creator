import * as c from './constants'
import Vue from 'vue'
import Vuex from 'vuex'
import { user, app } from './services'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      countdown: null,
      email: null,
      origin: null,
      steps: null,
      status: null
    },
    app: null
  },
  getters: {
    getStatus (state) {
      return state.user.status;
    }
  },
  mutations: {
    [c.SET_USER] (state, payload) {
      state.user = payload
    },
    [c.SET_APP] (state, payload) {
      state.app = payload
    }
  },
  actions: {
    async initializeApp({commit, dispatch}) {
      await dispatch('fetchUser');
      await dispatch('fetchApp');
    },
    async fetchUser ({ state, commit }) {
      await user.show()
        .then(res => {
          console.log(res);
          commit(c.SET_USER, res);
        })
    },
    async fetchApp ({ state, commit }) {
      await app.show(state.user.origin)
        .then(res => {
          console.log(res);
          commit(c.SET_APP, res);
        })
    }
  }
})
