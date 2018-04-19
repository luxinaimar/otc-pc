<template>
  <otc-page>
    <div class="user-security" slot="content">
      <otc-user-center></otc-user-center>
    </div>
  </otc-page>
</template>

<script>
import otcPage from 'components/otc-page/otc-page'
import otcUserCenter from 'components/otc-user-center/otc-user-center'

export default {
  name: 'userinfo',
  data () {
    return {
      eye: {
        open: true
      }
    }
  },
  computed: {

  },
  created() {

  },
  methods: {

  },
  components: {
    otcPage,
    otcUserCenter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "~common/less/variable";
</style>
