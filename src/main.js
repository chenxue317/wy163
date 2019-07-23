import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import store from './vuex/store'
import './mock/mockServer.js'
import VueLazyload from 'vue-lazyload'

import loading from './assest/loading.gif'
// or with options
Vue.use(VueLazyload, {
  //preLoad: 1.3,
  loading
  //attempt: 1
})



Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
