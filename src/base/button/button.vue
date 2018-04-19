<template>
  <button
    class="ccm-btn"
    :type="type"
    :class="btnClass"
    @click="handleClick">
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = 'ccm-button'

export default {
  name: COMPONENT_NAME,
  props: {
    icon: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    btnClass() {
      return {
        'ccm-btn_active': this.active,
        'ccm-btn_disabled': this.disabled,
        'ccm-btn-inline': this.inline,
        'ccm-btn-primary': this.primary,
        'ccm-btn-outline': this.outline,
        'ccm-btn-outline-primary': this.outline && this.primary,
        'ccm-btn-light': this.light
      }
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="less">
  @import "~common/less/variable";
  @import "~common/less/mixin";
  .btn-active(@bg, @border:@bg){
      &.cube-btn_active, &:active{
        background: @bg;
        .border-1px(@border);
      }
  }
  .ccm-btn{
    display: block;
    margin: 0;
    padding: 17px 16px;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    color: @btn-color;
    font-size: @fontsize-large;
    background: @btn-bgc;
    line-height: 1;
    border: none;
    outline: none;
    box-sizing: border-box;
    border-radius: 2px;
    -webkit-tap-highlight-color: transparent;
    > i{
      display: inline-block;
      margin-right: 4px;
      font-size: 100%;
      transform: scale(1.13);
      transform-origin: right center;
    }
    .btn-active(@btn-active-bgc, @btn-active-bdc);
    &.ccm-btn_disabled,
    &.ccm-btn_disabled.ccm-btn_active,
    &.ccm-btn_disabled:active{
      color: @btn-disabled-color;
      background: @btn-disabled-bgc;
      .border-1px(@btn-disabled-bdc);
    }
  }

  .ccm-btn-inline{
    display: inline-block;
    width: auto;
    vertical-align: middle;
    padding: 9px 10px;
    font-size: @fontsize-small;
    > i{
      margin-right: 2px;
      transform: scale(1.14);
    }
  }
  .ccm-btn-primary{
    color: @btn-primary-color;
    background: @btn-primary-bgc;
    .border-1px(@btn-primary-bdc);
    .btn-active(@btn-primary-active-bgc, @btn-primary-active-bdc);
  }
  .ccm-btn-outline{
    color: @btn-outline-color;
    background: @btn-outline-bgc;
    .border-1px(@btn-outline-bdc);
    .btn-active(@btn-outline-active-bgc, @btn-outline-active-bdc);
  }
  .ccm-btn-outline-primary{
    color: @btn-outline-primary-color;
    background: @btn-outline-primary-bgc;
    .border-1px(@btn-outline-primary-bdc);
    .btn-active(@btn-outline-primary-active-bgc, @btn-outline-primary-active-bdc);
  }
  .ccm-btn-light{
    color: @btn-light-color;
    background: @btn-light-bgc;
    box-shadow: @box-shadow-content;
    .btn-active(@btn-light-active-bgc, @btn-light-active-bdc);
  }
</style>
