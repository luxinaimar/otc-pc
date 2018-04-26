<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'otc-pc'
  },
  name: 'App'
}
</script>

<style lang="less">
@import "~common/less/variable";
html, body{
	background-color: @main_bgc;
	height: 100%;
	width: 100%;
}
#app {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
  min-width: 1200px;
  min-height: 100%;
  &:after {
    content: "";
    display: block;
  }
}
</style>
