import Vue from 'vue'
import Vuex from 'vuex'
import * as c from './constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countdownValue: 3600000,
    currentStep: 0,
    gameStartTime: null,
    restoredGame: false,
    finalCode: 9254
  },
  getters: {
    countdownValue (state) {
      return state.countdownValue;
    },
    getCurrentStep (state) {
      return state.currentStep;
    },
    playedTime (state) {
      const nowTimestamp = Date.now()
      const playedTimestamp = state.gameStartTime > 0 ? state.gameStartTime : nowTimestamp
      return (nowTimestamp - playedTimestamp);
    },
    gameStartTime (state) {
      return state.gameStartTime;
    },
    restoredGame (state) {
      return state.restoredGame;
    },
    finalCode (state) {
      return state.finalCode;
    }
  },
  mutations: {
    [c.SET_CURRENT_STEP_AT] (state, payload) {
      state.currentStep = payload;
    },
    [c.SET_CURRENT_STEP] (state, payload) {
      state.currentStep += payload;
    },
    [c.SET_GAME_START] (state, payload) {
      state.gameStartTime = payload;
    },
    [c.SET_RESTORED_GAME] (state) {
      state.restoredGame = true;
    }
  },
  actions: {
    initializeApp({commit}) {
      const current_step = parseInt(localStorage.getItem('game_current_step')) || 0
      const start_time = parseInt(localStorage.getItem('game_start_timestamp'))
      commit(c.SET_CURRENT_STEP_AT, current_step);
      commit(c.SET_GAME_START, start_time);
      start_time && commit(c.SET_RESTORED_GAME)
    },
    startGameStep({commit, dispatch}) {
      commit(c.SET_CURRENT_STEP_AT, 1);
      dispatch('set_current_step_game')
    },
    incrementStep({commit, dispatch}) {
      commit(c.SET_CURRENT_STEP, 1);
      dispatch('set_current_step_game')
    },
    decrementStep({commit, dispatch}) {
      commit(c.SET_CURRENT_STEP, -1)
      dispatch('set_current_step_game')
    },
    markStartGame({state, commit}) {
      if (!state.gameStartTime) {
        commit(c.SET_GAME_START, Date.now())
        localStorage.setItem('game_start_timestamp', Date.now())
      }
    },
    set_current_step_game({state}) {
      localStorage.setItem('game_current_step', state.currentStep);
    },
    clearStorage({commit}) {
      localStorage.removeItem('game_current_step');
      localStorage.removeItem('game_start_timestamp');
      commit(c.SET_CURRENT_STEP_AT, 0);
      commit(c.SET_GAME_START, null);
    }
  }
})
