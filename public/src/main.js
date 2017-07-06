import Vue from 'vue'
import Router from 'vue-router'
import { configRouter } from './route-config'
import App from './App.vue'

Vue.use(Router)
Vue.use(require('vue-resource'))
// Vue.use(require('vue-async-data'))
Vue.use(require('vue-validator'))

// register filters globally
Vue.filter('dateFormat', require('./filters/timestampFormat'))

var router = new Router({
  // history: true
})

configRouter(router)

Vue.transition('expand', {

  beforeEnter(el) {
    el.textContent = 'beforeEnter'
  },
  enter(el) {
    el.textContent = 'enter'
  },
  afterEnter(el) {
    el.textContent = 'afterEnter'
  },
  enterCancelled(el) {
    // handle cancellation
  },

  beforeLeave(el) {
    el.textContent = 'beforeLeave'
  },
  leave(el) {
    el.textContent = 'leave'
  },
  afterLeave(el) {
    el.textContent = 'afterLeave'
  },
  leaveCancelled(el) {
    // handle cancellation
  }
})

router.start(App, 'body')



    
  