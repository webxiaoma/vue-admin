<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
     return {
       
     }
  }
}
</script>

<style lang="less">
@import url("./theme/base-theme.less");

body,html {
  height: 100%;
  padding:0;
  margin:0;
  background-color: @body-color;
  font-size:14px;
}
*{
  box-sizing: border-box;
  list-style: none;
  font-style:normal;
  margin:0;
  padding:0;
  font-family: "Microsoft YaHei","Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
}
a{
  color:@font-color-2;
  text-decoration:none;
}
#app {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
