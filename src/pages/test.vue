<template>
  <otc-page>
    <div class="test" slot="content">
      test
    </div>
  </otc-page>
</template>

<script>
import otcPage from 'components/otc-page/otc-page'
import {userReg} from 'api/user'
import {ERR_OK} from 'api/config'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'test',
  data () {
    return {
      msg: 'test'
    }
  },
  computed: {
    ...mapGetters([
      'singer',
      'userUser',
      'orderUser'
    ])
  },
  created() {
    let data = {
      'user_name': 'hahha',
      'sms_code': 9570,
      'mobile_phone': 15176501024,
      'passwd': '612345Bt'
    }
    this._userReg(data)
    this.setSinger({dd: 2})
    this.setUser({dd: 3})
    this.setOrderUser({da: 4})
    console.log(this.singer)
    console.log(this.userUser)
    console.log(this.orderUser)
  },
  methods: {
    _userReg(params) {
      userReg(params).then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
        }
      })
    },
    ...mapMutations({
      setSinger: 'SET_SINGER',
      setUser: 'USER_SET_USER',
      setOrderUser: 'ORDER_SET_USER'
    })
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
