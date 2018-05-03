<template>
  <otc-page>
    <div class="signup" slot="content">
      <div class="signup-main">
        <div class="signup-main-left">
          <div class="signup-main-left-content">
            注册注册注册注册注册注册注册注册
          </div>
        </div>
        <div class="signup-main-right">
         <div class="signup-main-right-content">
            <h1 class="box-header">
              注册
            </h1>
            <div class="box-content">
              <div class="input-list">
                <div class="input-item">
                  <ccm-input placeholder="请输入用户名" :clearable="true" v-model='username'></ccm-input>
                </div>
                <div class="input-item">
                  <ccm-input placeholder="请输入手机号" :clearable="true" v-model='phonenum'></ccm-input>
                </div>
                <div class="input-item">
                  <ccm-input placeholder="请输入图片验证码" v-model='smscode'>
                   <!--  <a href="#" slot="append" class="pic-code-btn">获取图片验证码</a> -->
                   <img slot="append" class="pic-code-btn" src="https://www.firefoxotc.com/api/image/verify_code/signup?_t=1524818709708" />
                  </ccm-input>
                </div>
                <div class="input-item">
                  <ccm-input placeholder="请输入密码" type="password" :eye="{eye}" :clearable="true" v-model='pwd'></ccm-input>
                </div>
              </div>
              <div class="clause">
                注册即表示同意<a href="#">《otc产品服务条款》</a>
              </div>
              <div class="box-bottom">
                <ccm-button :primary="true" @click='userReg'>注册</ccm-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </otc-page>
</template>

<script>
import otcPage from 'components/otc-page/otc-page'
import ccmInput from 'base/input/input'
import ccmButton from 'base/button/button'
import {mapActions} from 'vuex'

export default {
  name: 'signup',
  data () {
    return {
      eye: {
        open: true
      },
      username: '',
      phonenum: '',
      smscode: '',
      pwd: ''
    }
  },
  computed: {

  },
  created() {
    // this.userReg()
  },
  mounted () {
    this.$notify({
      content: 'test notify',
      btn: 'close'
    })
    this.$notify({
      content: 'test notify',
      btn: 'close'
    })
    this.$notify({
      content: 'test notify',
      btn: 'close'
    })
  },
  methods: {
    ...mapActions([
      'userRegister'
    ]),
    userReg() {
      this.$notify({
        content: 'test notify',
        btn: 'close'
      })
      console.log(this.username)
      console.log(this.phonenum)
      console.log(this.smscode)
      console.log(this.pwd)
      let data = {
        'user_name': this.username,
        'sms_code': this.smscode,
        'mobile_phone': this.phonenum,
        'passwd': this.pwd
      }
      this.userRegister(data)
    }
  },
  components: {
    otcPage,
    ccmInput,
    ccmButton
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
  .signup-main-left{
    width: 380px;
    background: @signup-left-bgc;
  }
  .signup-main-left-content{
    padding: 60px 50px;
  }
  .signup-main-right{
    background: @signup-right-bgc;
    flex: 1;
  }
  .signup-main-right-content{
    padding: 70px 0;
    width: 390px;
    margin: 0 auto;
    .box-header{
      width: 100%;
      height: 26px;
      line-height: 30px;
      text-align: left;
      font-size: @fontsize-large-xx;
    }
    .box-content{
      margin-top: 30px;
    }
    .input-item{
      margin-bottom: 24px;
      .ccm-input{
        font-size: @fontsize-large;
        line-height: 1.8;
      }
      .pic-code-btn{
        margin-right: 5px;
      }
    }
    .clause{
      margin-top: 20px;
      padding-left: 10px;
      font-size: @fontsize-small;
      text-align: left;
      a{
        color: @link-color;
      }
    }
    .box-bottom{
      margin-top: 30px;
    }
  }
</style>
