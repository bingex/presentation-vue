import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'
import VueTouch from 'vue-touch'
import store from './vuex/store'

Vue.use(VueSocketio, 'http://localhost:8000')
Vue.use(VueTouch, { name: 'v-touch' })

router.beforeEach((to, from, next) => {
  if (store.getters.login || to.name === 'Login') {
    next()
  } else {
    router.push('/login')
  }
})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App}
})
