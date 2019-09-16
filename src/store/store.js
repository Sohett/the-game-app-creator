import * as c from './constants'
import Vue from 'vue'
import Vuex from 'vuex'
import { user, app } from './services'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getOrganization (state) {
      return state.currentUserOrganization;
    }
  },
  mutations: {
    [c.SET_USER] (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async initializeApp({commit, dispatch}) {
      await dispatch('fetchUser');
    },
    async fetchUser ({ state, commit }) {
      const { success, data } = await user.show()
      console.log(data)
      if (success) {
        commit(c.SET_USER, data)
      }
      return data
    }
  }
})
