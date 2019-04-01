import Vue from 'vue'
import App from './App'
import router from './router'

/**************************************/
import './style/common.less'; //less预编译器
import './configs/rem'; //rem
import store from './store';  //vuex
/**************************************/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
