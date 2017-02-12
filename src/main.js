// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueSocketio from 'vue-socket.io';
import VueTouch from 'vue-touch';

Vue.use(VueSocketio, 'http://192.168.0.101:8000');
Vue.use(VueTouch, { name: 'v-touch' });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
