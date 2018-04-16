<template>
  <otc-page>
    <div class="signup" slot="content">
      <div class="signup-main">
        注册
      </div>
    </div>
  </otc-page>
</template>

<script>
import otcPage from 'components/otc-page/otc-page'

export default {
  name: 'signup',
  data () {
    return {
      msg: 'signup'
    }
  },
  computed: {

  },
  created() {

  },
  methods: {

  },
  components: {
    otcPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "~common/less/variable";

  .signup{
    width: 1200px;
    margin: 0 auto;
    background-color: transparent;
    padding: 125px 0 123px;
  }
  .signup-main{
    width: 940px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 1px 1px 8px rgba(0,0,0,.15);
    background: @color-white;
    margin: 0 auto;
    display: flex;
  }
</style>
