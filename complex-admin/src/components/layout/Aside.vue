<template>
  <div class="asideWrap" :style="isAsideNav?{width:'64px'}:''">
    <div class="logo">
       <el-row>
          <el-col>
             <div class="logoDiv">
               <a href="/">
                 <p class="logoCenter">
                    <img src="../../assets/img/logo.jpg" />
                    <transition name="fade">
                      <span class="hidden-sm-and-down" v-show="!isAsideNav">后台管理</span>
                    </transition>
                 </p>
               </a>
             </div>
          </el-col>
       </el-row>
    </div>
    <div class="nav">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            :collapse="isAsideNav"
            :router="true"
            :default-active="pathAcitve"
            class="el-menu-vertical-demo"
            text-color="#b8b7b7"
            active-text-color="#fff">
               <el-submenu v-for="(item,index) in nav" :key="index" :index="index.toString()">
                    <template slot="title">
                      <i :class="item.icon"></i>
                      <span>{{item.title}}</span>
                    </template>
                    <el-menu-item v-for="linkOne in item.link" :key="linkOne.router"  :index="linkOne.router">{{linkOne.title}}</el-menu-item>
                    <el-submenu v-for="child in item.children" :key="child.title" :index="index + '-' + (index++)"  v-show="item.children.length!==0">
                      <template slot="title">{{child.title}}</template>
                      <el-menu-item v-for="linkChild in child.link" :key="linkChild.router" :index="linkChild.router">{{linkChild.title}}</el-menu-item>
                    </el-submenu>
               </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import {Nav} from '@/public/nav'

export default {
  name: 'AsideLayout',
  data(){
    return{
       nav:Nav,
       pathAcitve:'/'
    }
  },
  watch:{
   $route(to,from){
      this.pathAcitve = to.fullPath;
   }
  },
  computed: {
     ...mapState(['isAsideNav']),
  },

}
</script>

<style lang="less" scoped>
@import url("../../theme/base-theme.less");

.asideWrap{
    width: 256px;
    transition:all .3s linear;
    .logo{
      width:100%;
      height:64px;
      background: @main-color;
      .el-row{
        height:100%;
        .el-col{
          height:100%;
        }
      }
      .logoDiv{
          width:100%;
          height:100%;
          .logoCenter{
              height:100%;
              display: flex;
              justify-content: center;
              align-items:center;
              color:@font-color-4;
              font-size:24px;
              img{
                width:32px;
                height:32px;
                vertical-align:middle;
              }
              span{
                 margin-left:10px;
              }
              .fade-enter-active,{
                transition: opacity .5s .2s linear;
              }
              .fade-enter, .fade-leave-to  {
                opacity: 0;
              }
          }
      }

    }
    .nav{
      //  background-color="#001529"

      .el-menu-vertical-demo{
        background: @minor-color-1;
        border-right:none;
        /deep/.el-menu--inline{
          .el-submenu__title{
            background-color:@minor-color-2 !important;
            // border-bottom:1px solid #eee;
          }
        }
        .el-submenu .el-menu-item{
          background-color:@minor-color-2 !important;
        }
        .el-submenu .el-menu-item:hover{
          background: @bg-hover-1 !important;
           color:@minor-color-4 !important;
        }
        .el-menu-item.is-active{
          background-color:@minor-color-3 !important;
          color:@minor-color-4 !important;
        }
        /deep/.el-submenu__title{
          color:@font-color-3 !important;
        }
        /deep/.el-submenu__title:hover{
          background-color:@bg-hover-1 !important;
          color:@minor-color-4 !important;
        }
        .el-menu-item:hover{
          background-color:@bg-hover-1 !important;
           color:@minor-color-4 !important;
        }
      }
    }

}


@media screen and (max-width: @screen-md) {
  .asideWrap{
      width:64px;
  }

}

</style>
