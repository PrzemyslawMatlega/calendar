
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './router';

Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
