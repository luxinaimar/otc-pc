import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import createRouter from './router'
import createStore from './store'

import 'common/less/index.less'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

const router = createRouter()
const store = createStore()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
