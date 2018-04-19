<template>
  <div class="user-center">
    <div class="user-center-title">
      用户中心
    </div>
    <div class="left">
      <div class="sidebar">
        <div class="menu-group">
          <div class="menu-item">
            <router-link class="item-link" to="/user/info">基本信息</router-link>
          </div>
          <div class="menu-item">
            <router-link class="item-link" to="/user/security">安全中心</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <slot></slot>
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
  .user-center{
    width: 1200px;
    margin: 25px auto 0;
    padding-bottom: 135px;
    .user-center-title{
      font-size: @fontsize-large-x;
      text-align: left;
      color: @user-center-color;
      line-height: 2.8;
      background: @user-center-bgc;
      padding: 0 30px;
      margin-bottom: 20px;
    }
    .left{
      width: 220px;
      float: left;
    }
    .sidebar{
      width: 100%;
    }
    .menu-group{
      background-color: @user-center-bgc;
      padding: 6px;
      border-radius: 3px;
      min-height: 280px;
      .menu-item{
        width: 100%;
        height: 48px;
        line-height: 48px;
        text-align: left;
        font-size: @fontsize-medium;
        .item-link{
          color: @user-center-color;
          display: block;
          padding-left: 26px;
        }
        .router-link-active{
          color: @link-color;
          background: @main_bgc;
        }
      }
    }
    .right{
      width: 960px;
      min-height: 292px;
      float: right;
    }
  }
</style>
