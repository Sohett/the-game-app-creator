import Vue from 'vue'
import App from './App.vue'
import Moment from 'vue-moment'
import router from './router'
import store from './store/store'
import './plugins/element.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
