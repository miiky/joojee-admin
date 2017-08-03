// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview';
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'
import App from './App'

import 'iview/dist/styles/iview.css';

Vue.use(VueRouter)
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
