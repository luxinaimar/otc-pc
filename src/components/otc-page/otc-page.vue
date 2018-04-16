<template>
  <div class="otc-page">
    <otc-header></otc-header>
    <div class="main">
      <slot name="content"></slot>
    </div>
    <otc-footer></otc-footer>
  </div>
</template>
<script>
import otcHeader from 'components/otc-header/otc-header'
import otcFooter from 'components/otc-footer/otc-footer'

export default {
  props: {

  },
  components: {
    otcHeader,
    otcFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~common/less/variable";

.otc-page{
  background-color: @main_bgc;
  width: 100%;
  text-align: center;
}
</style>
