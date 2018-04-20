<template>

    <div class="loayoutWarp">
      <div class="loayoutMain" v-show="!isLoginPage">
          <div class="left">
            <aside-layout></aside-layout>
          </div>
          <div class="right">
              <el-container>
                <el-container>
                  <el-header height="64px">
                    <header-layout></header-layout>
                  </el-header>
                  <el-main>
                      <div class="routerView">
                        <router-view></router-view>
                      </div>
                      <div class="footerLayout">
                        <footer-layout></footer-layout>
                      </div>
                  </el-main>
                </el-container>
              </el-container>
          </div>
      </div>

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
    display:flex;
    .left{
      background:@minor-color-1;
    }
    .right{
      height:100%;
      flex-grow:1;
    }
    .el-container{
      height:100%;
    }
    .el-header,.el-footer,.el-main{
      padding:0;
    }
    .el-main{
     display: flex;
     flex-direction: column;
      .routerView{
        position: relative;
        display:flex;
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
