<template>
  <otc-page>
    <div class="user-info" slot="content">
      <otc-user-center>
        <div class="user-base">
          <div class="user-base-top">
            <h1 class="user-base-title">基本信息</h1>
          </div>
          <div class="user-info-content">
            <div class="item">
              <span>用户姓名 :</span>aaaa
            </div>
            <div class="item">
              <span>邮箱地址 :</span>aaaa
            </div>
            <div class="item">
              <span>手机号码 :</span>aaaa
            </div>
            <div class="item">
              <span>注册时间 :</span>aaaa
            </div>
          </div>
        </div>
      </otc-user-center>
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
  .user-info{
    padding-bottom: 135px;
    overflow: hidden;
  }
  .user-base{
    min-height: inherit;
    background-color: @user-center-bgc;
    border-radius: 3px;
  }
  .user-base-top{
    position: relative;
    height: 48px;
    border-radius: 3px 3px 0 0;
    margin: 0 auto;
    padding: 0 10px;
    box-shadow: @user-base-box-shadow;
    overflow: hidden;
    z-index: 1;
    .user-base-title{
      float: left;
      padding: 15px 20px;
      color: @color-white;
    }
  }
  .user-info-content{
    width: 900px;
    margin: 0 auto;
    line-height: 46px;
    padding-top: 10px;
    .item{
      padding-left: 20px;
      font-size: 14px;
      color: @user-center-color;
      border-bottom: 1px solid hsla(0,0%,100%,.05);
      text-align: left;
      span{
        color: @user-base-label-color;
        display: inline-block;
        width: 120px;
      }
    }
  }
</style>
