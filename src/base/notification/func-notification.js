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
  mounted() {
    // console.log(this.verticalOffset)
    this.createTimer()
  },
  data() {
    return {
      verticalOffset: 0,
      autoClose: 3000,
      height: 0,
      visable: false
    }
  },
  methods: {
    createTimer() {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visable = false
        }, this.autoClose)
      }
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    afterEnter() {
      this.height = this.$el.offsetHeight
    }
  },
  beforeDestory() {
    console.log(22)
    if (this.timer) {
      this.clearTimer()
    }
  }
}
