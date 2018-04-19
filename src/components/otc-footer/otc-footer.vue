<template>
  <div class="footer">
    <div class="header-content">
      <div class="nav">
        <router-link class="nav-link" to="/about">关于我们</router-link>
        <router-link class="nav-link" to="/">用户协议</router-link>
        <router-link class="nav-link" to="/">教程帮助</router-link>
        <router-link class="nav-link" to="/">费率说明</router-link>
      </div>
      <div class="copyright">Copyright 2017 aolaiotc. All Rights Reserved</div>
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
  .footer{
    position: fixed;
    width: 100%;
    min-width: 1200px;
  }
  .header-content{
    display: flex;
    width: 1200px;
    margin: 0 auto;
    border-top: 1px solid #464751;
  }
  .nav{
    width: 50%;
    text-align: center;
    font-size: @fontsize-medium;
    color: @footer-color;
    .nav-link{
      color: @footer-color;
      display: inline-block;
      margin: 0 10px;
      line-height: 3.8;
    }
  }
  .copyright{
    width: 50%;
    text-align: left;
    font-size: @fontsize-medium;
    color: @footer-color;
    line-height: 3.8;
  }
</style>
