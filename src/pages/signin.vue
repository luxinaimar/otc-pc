<template>
  <otc-page>
    <div class="signin" slot="content">
      登录
    </div>
  </otc-page>
</template>

<script>
import otcPage from 'components/otc-page/otc-page'

export default {
  name: 'signin',
  data () {
    return {
      msg: 'signin'
    }
  },
  components: {
    otcPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
