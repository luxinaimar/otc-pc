import Notification from './notification.vue'

export default {
  extends: Notification,
  computed: {
    style() {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`
      }
    }
  },
  mounted () {
    // console.log(this.verticalOffset)
  },
  data() {
    return {
      verticalOffset: 0
    }
  }
}
