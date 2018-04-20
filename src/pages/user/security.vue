<template>
  <otc-page>
    <div class="user-security" slot="content">
      <otc-user-center>
        <div class="user-base">
          <div class="user-base-top">
            <h1 class="user-base-title">实名认证</h1>
          </div>
          <div class="base-content">
            <div class="item">
              保障您的银行卡支付安全
              <a href="#">去认证</a>
            </div>
          </div>
          <div class="user-base-top">
            <h1 class="user-base-title">支付信息</h1>
          </div>
          <div class="base-content">
            <div class="item">
              支付宝
              <router-link to="/user/security/user_payment">设置</router-link>
            </div>
            <div class="item">
              微信
              <router-link to="/user/security/user_payment">设置</router-link>
            </div>
            <div class="item">
              银行卡
              <router-link to="/user/security/user_payment">设置</router-link>
            </div>
          </div>
          <div class="user-base-top">
            <h1 class="user-base-title">密码安全</h1>
          </div>
          <div class="base-content">
            <div class="item">
              <span>登录密码</span>保障您的账户安全
              <router-link to="/user/security/modify_password">修改</router-link>
            </div>
            <div class="item">
              <span>资金密码</span>保障您的数字币资产安全
              <div class="operation">
                <div class="operation-wrapper">
                  <div class="operation_item unbind">未设置</div>
                  <div class="operation_item set"><router-link to="/user/security/set_payment_password">设置</router-link></div>
                </div>
              </div>
            </div>
          </div>
          <div class="user-base-top">
            <h1 class="user-base-title">双重身份验证</h1>
          </div>
          <div class="base-content">
            <div class="item">
              <span>手机号</span>手机验证保障您的账户安全
              <div class="operation">
                <div class="operation-wrapper">
                  <div class="operation_item bind">已绑定</div>
                </div>
              </div>
            </div>
            <div class="item">
              <span>邮箱</span>邮箱验证保障您的账户安全、及凭证维权
              <div class="operation">
                <div class="operation-wrapper">
                  <div class="operation_item unbind">未设置</div>
                  <div class="operation_item set"><router-link to="/user/security/set_payment_password">设置</router-link></div>
                </div>
              </div>
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
    border-radius: 3px;
  }
  .user-base-top{
    position: relative;
    height: 48px;
    border-radius: 3px 3px 0 0;
    margin: 0 auto;
    padding: 0 10px;
    box-shadow: @user-base-box-shadow;
    background-color: @user-center-bgc;
    overflow: hidden;
    z-index: 1;
    .user-base-title{
      float: left;
      padding: 15px 20px;
      color: @color-white;
    }
  }
  .base-content{
    width: 900px;
    line-height: 46px;
    padding: 10px 30px 20px;
    margin-bottom: 20px;
    overflow: hidden;
    background-color: @user-center-bgc;
    .item{
      font-size: 14px;
      color: @user-base-label-color;
      border-bottom: 1px solid hsla(0,0%,100%,.05);
      text-align: left;
      span{
        color: @user-base-label-color;
        display: inline-block;
        width: 120px;
      }
      a{
        float: right;
        color: @link-color;
      }
      .operation{
        display: inline-block;
        float: right;
        .unbind{
          color: @unbind-color;
        }
        .bind{
          color: @bind-color;
        }
        .operation-wrapper{
          display: flex;
        }
        .operation_item{
          margin-left: 30px;
        }
      }
    }
  }
</style>
