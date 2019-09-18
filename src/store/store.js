import * as c from './constants'
import Vue from 'vue'
import Vuex from 'vuex'
import { app, steps } from './services'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: {
      countdown: null,
      email: null,
      origin: null,
      steps: null,
      status: null,
      name: null
    },
    steps: null
  },
  getters: {
    getStatus (state) {
      return state.app.status;
    }
  },
  mutations: {
    [c.SET_APP] (state, payload) {
      state.app = payload
    },
    [c.SET_STEPS] (state, payload) {
      state.steps = payload
    }
  },
  actions: {
    async initializeApp({commit, dispatch}) {
      await dispatch('fetchApp');
      await dispatch('fetchSteps');
    },
    async fetchApp ({ state, commit }) {
      await app.show()
        .then(res => {
          console.log(res);
          commit(c.SET_APP, res);
        })
    },
    async fetchSteps ({ state, commit }) {
      await steps.show(state.app.origin)
        .then(res => {
          console.log(res);
          commit(c.SET_STEPS, res);
        })
    }
  }
})
