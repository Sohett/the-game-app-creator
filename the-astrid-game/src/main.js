import Vue from 'vue'
import App from './App.vue'
import Meta from 'vue-meta';
import store from './store/store'
import './plugins/element.js'
import VueCountdown from '@chenfengyuan/vue-countdown';

Vue.component(VueCountdown.name, VueCountdown);

Vue.use(Meta);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
