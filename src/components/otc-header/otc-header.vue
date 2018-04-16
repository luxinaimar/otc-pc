<template>
  <div class="header">
    <div class="header-content">
      <div class="logo">奥币网</div>
      <div class="navbar">
        <div class="nav-item"><router-link class="nav-link" to="/" exact>首页</router-link></div>
        <div class="nav-item"><router-link class="nav-link" to="/a">场外交易</router-link></div>
        <div class="nav-item"><router-link class="nav-link" to="/b">币币交易</router-link></div>
        <div class="nav-item"><router-link class="nav-link" to="/c">分享奖励</router-link></div>
      </div>
      <div class="login">
        <div class="login-item"><router-link class="login-link" to="/signup">注册</router-link></div>
        <div class="login-item"><router-link class="login-link" to="/signin">登录</router-link></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {

  }
}
</script>
<style lang="less" scoped>
  @import "~common/less/variable";

  .header{
    width: 100%;
    background: @header_bgc;
  }
  .header-content{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 45px;
    line-height: 45px;
    font-size: @fontsize-large;
    background: @header_bgc;
    color: @color-white;
  }
  .logo{
    float: left;
    width: 200px;
  }
  .navbar{
    float: left;
    .nav-item{
      float: left;
      padding: 0 12px;
      width: 75px;
    }
    .nav-link{
      color: @color-white;
    }
    .router-link-active, .nav-link:hover{
      color: @color-regular-blue;
    }
  }
  .login{
    float: right;
    .login-item{
      float: right;
      min-width: 60px;
      margin-right: 30px;
    }
    .login-link{
      color: @color-white;
    }
  }
</style>
