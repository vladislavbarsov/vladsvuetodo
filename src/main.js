import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LongPress from 'vue-directive-long-press'

Vue.config.productionTip = false

export const editTodo = new Vue();

Vue.directive('long-press', LongPress);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
