<template>
  <transition name="fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div
      class="ccm-notification"
      :style="style"
      v-show="visable"
      @mouseenter="clearTimer"
      @mouseleave="createTimer"
    >
      <span class="content">{{content}}</span>
      <a class="btn" @click="handleClose">{{btn}}</a>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
const COMPONENT_NAME = 'ccm-notification'
export default {
  name: COMPONENT_NAME,
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: `关闭`
    }
  },
  data() {
    return {
      visable: true
    }
  },
  computed: {
    style() {
      return {}
    }
  },
  methods: {
    handleClose(e) {
      e.preventDefault()
      this.$emit('close')
    },
    afterLeave() {
      this.$emit('closed')
    },
    afterEnter() {},
    clearTimer() {},
    createTimer() {}
  }
}
</script>

<style lang="less">
.ccm-notification{
  display: flex;
  background-color: #303030;
  color: rgba(255, 255, 255, 1);
  align-items: center;
  padding: 20px;
  position: fixed;
  min-width: 280px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.2);
  flex-wrap: wrap;
  transition: all .3s;
  .content{
    padding: 0;
  }
  .btn{
    color: #ff4081;
    padding-left: 24px;
    margin-left: auto;
    cursor: pointer;
  }
}
</style>
