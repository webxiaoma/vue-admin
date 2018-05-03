<template>

    <div class="loayoutWarp">
      <div class="loayoutMain" v-show="!isLoginPage">
          <div class="left">
            <aside-layout></aside-layout>
          </div>
          <div class="right" :style="isAsideNav?{marginLeft:'64px'}:''">
             <el-container>
                <el-container>
                  <el-header>
                    <header-layout></header-layout>
                  </el-header>
                  <el-main>
                    <div class="routerView">
                      <router-view></router-view>
                      <div class="footerLayout">
                          <footer-layout></footer-layout>
                      </div>
                    </div>
                  </el-main>
                </el-container>
              </el-container>
          </div>

      </div>

<!--登录界面-->
      <div class="loayoutLogin" v-show="isLoginPage">
         <router-view></router-view>
         <div class="footerLayout">
          <footer-layout></footer-layout>
         </div>
      </div>



   </div>



</template>

<script>
import {mapState,mapActions} from 'vuex'
import { HeaderLayout, FooterLayout, AsideLayout} from './layout'

export default {
 name: 'Main',
 data(){
   return{
      changeLayout:true,
   }
 },
 mounted(){
      let width = document.documentElement.clientWidth;
      if(width<992){
        this.navChange(true)
      }
      if(width>=992){
        this.navChange(false)
      }
    window.onresize = ()=>{ // 窗口变化时做一些处理
      let width = document.documentElement.clientWidth;
      if(width<992){
        this.navChange(true)
      }
      if(width>=992){
        this.navChange(false)
      }
    }
 },
 computed:{
    ...mapState(['isAsideNav','isLoginPage']),
 },
 methods:{
     ...mapActions(['navChange']),
 },
 components:{
     HeaderLayout,
     FooterLayout,
     AsideLayout,
 }
}
</script>

<style lang="less" scoped>
@import url("../theme/base-theme.less");
.loayoutWarp{
   width:100%;
   height:100%;
}
.loayoutMain{
    height:100%;
    .left{
      min-height:100%;
      float: left;
      background:@minor-color-1;
    }
    .right{
      min-height:100%;
      margin-left:256px;
      transition:all .2s .05s linear;
      display:flex;
    }
    .el-container{
      min-height:100%;
      flex-grow:1;
    }
    .el-header{
      min-height:64px;
      height:auto!important;
    }
    .el-header,.el-footer,.el-main{
      padding:0;
    }
    .el-main{
     display: flex;
     flex-direction: column;
      .routerView{
          width:100%;
          display:flex;
          flex-direction: column;
          flex:1;
      }
    }
}

.loayoutLogin{
    height:100%;
    display:flex;
    flex-direction: column;
}
</style>
