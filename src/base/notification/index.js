import ccmNotification from './notification.vue'
import notify from './function.js'

export default (Vue) => {
  Vue.component(ccmNotification.name, ccmNotification)
  Vue.prototype.$notify = notify
}
