import Vue from 'vue'
import Electron from 'vue-electron'
import Router from 'vue-router'
import VueCodeMirror from 'vue-codemirror'

import 'photonkit/dist/css/photon.css'

import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(Router)
Vue.use(VueCodeMirror)
Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
