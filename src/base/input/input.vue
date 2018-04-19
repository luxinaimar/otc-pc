<template>
  <div class="ccm-input" :class="{'ccm-input_active': isFocus }">
    <div class="ccm-input-clear" v-if="_showClear" @click="handleClear">
      <slot>
        <i class="ccmic-closed"></i>
      </slot>
    </div>
    <div class="ccm-input-eye" v-if="_showPwdEye" @click="handlePwdEye">
      <slot>
        <i :class="eyeClass"></i>
      </slot>
    </div>
    <input
      ref="input"
      v-bind="$props"
      :type="_type"
      v-model="inputValue"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      @focus="handleFocus"
      @blur="handleBlur"
    >
  </div>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = 'ccm-input'
const EVENT_INPUT = 'input'
const EVENT_FOCUS = 'focus'
const EVENT_BLUR = 'blur'

export default {
  name: COMPONENT_NAME,
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    eye: {
      type: [Boolean, Object],
      default: false
    },
    placeholder: String,
    name: String,
    id: String,
    form: String,
    minlength: Number,
    maxlength: Number,
    resize: String,
    min: Number,
    max: Number,
    step: Number,
    tabindex: String
  },
  data() {
    return {
      inputValue: this.value,
      isFocus: false,
      pwdVisible: false
    }
  },
  computed: {
    _type() {
      const type = this.type
      if (type === 'password' && this.pwdVisible) {
        return 'text'
      }
      return type
    },
    _showClear() {
      return this.clearable && this.inputValue && !this.readonly && !this.disabled
    },
    _showPwdEye() {
      return this.type === 'password' && this.eye && !this.disabled
    },
    eyeClass() {
      return this.pwdVisible ? 'ccmic-eye-invisible' : 'ccmic-eye-visible'
    }
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue
    },
    inputValue(newValue) {
      this.$emit(EVENT_INPUT, newValue)
    },
    eye() {
      this._computedPwdVisible()
    }
  },
  created() {
    this._computedPwdVisible()
  },
  methods: {
    handleFocus(e) {
      this.$emit(EVENT_FOCUS, e)
      this.isFocus = true
    },
    handleBlur() {
      this.$emit(EVENT_BLUR)
      this.isFocus = false
    },
    handleClear() {
      this.inputValue = ''
      this.$refs.input.focus() // 清空后重现获取焦点
    },
    handlePwdEye() {
      this.pwdVisible = !this.pwdVisible
    },
    _computedPwdVisible() {
      if (typeof this.eye === 'boolean') {
        this.pwdVisible = this.eye
      } else {
        this.pwdVisible = this.eye.open // 开放对象情况 open属性
      }
    }
  }
}
</script>
<style lang="less">
  @import "~common/less/variable";
  @import "~common/less/mixin";

  .ccm-input{
    position: relative;
    font-size: @fontsize-medium;
    line-height: 1.429;
    .border-1px(@input-border-color);
    input{
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      line-height: inherit;
      outline: none;
      border-radius: 2px;
      color: @input-color;
      background-color: @input-bgc;
      &::-webkit-input-placeholder{
        color: @input-placeholder-color!important;
        text-overflow: ellipsis;
      }
    }
  }
  .ccm-input_active{
    &::after{
      border-color: @input-focus-border-color;
    }
  }
  .ccm-input-clear, .ccm-input-eye{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1em;
    height: 1em;
    padding: 10px .8em;
    line-height: 1;
    margin: auto;
    color: @input-clear-icon-color;
    > i{
      display: inline-block;
      transform: scale(1.5);
    }
    + input{
      padding-right: 2.6em;
    }
  }
  .ccm-input-eye{
    > .ccmic-eye-invisible, .ccmic-eye-visible{
        transform: scale(1.4);
    }
  }
  .ccm-input-clear{
    + .ccm-input-eye{
      right: 2.6em;
      + input{
        padding-right: 5.2em;
      }
    }
  }
</style>
