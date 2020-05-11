import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LongPress from 'vue-directive-long-press'
import store from './store'

Vue.config.productionTip = false

export const editTodo = new Vue();

Vue.directive('long-press', LongPress);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
