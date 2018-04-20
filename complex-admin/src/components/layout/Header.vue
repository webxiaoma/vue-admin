<template>
  <div class='headerWrap'>
         <el-row>
           <el-col :span="10">
               <div class="navBtn">
                 <p  @click="controlNav">
                   <i :class="!isAsideNav?'iconfont icon-shouqi':'iconfont icon-zhankai'"></i>
                 </p>
               </div>
           </el-col>
           <el-col :span="14" type="flex">
               <div class="personWrap">
                  <ul class="ul">
                    <li class="problem">
                      <el-tooltip effect="dark" content="使用帮助" placement="bottom">
                        <router-link to="/">
                              <i class="iconfont icon-problem"></i>
                        </router-link>
                      </el-tooltip>
                    </li>
                    <li class="person">
                        <el-dropdown>
                          <div class="dropdown-link">
                            <p><img src="../../assets/img/logo.jpg"/></p>
                            <p class="hidden-sm-and-down">18910342936</p>
                          </div>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <span class="iconWrap">
                                  <i class="iconfont icon-yonghu3"></i>
                                  个人中心
                                </span>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <span>
                                  <i class="iconfont icon-zhifushibai"></i>
                                  发生报错
                                </span>
                            </el-dropdown-item>
                            <el-dropdown-item divided>
                                <span @click="exitLogin">
                                  <i class="iconfont icon-tuichu5"></i>
                                  退出登录
                                </span>
                            </el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                  </ul>
               </div>
           </el-col>
         </el-row>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'

export default {
  name: 'HeaderLayout',
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['isAsideNav'])
  },
  methods:{
    ...mapActions(['navChange']),
    controlNav(){ // 控制导航
      this.navChange(!this.isAsideNav)
    },
    exitLogin(){
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../theme/base-theme.less");

.headerWrap{
  height:64px;
  display:flex;
  background:@minor-color-4;
  box-shadow: 1px 0px 6px 1px @border-color;
  .el-row{
    width:100%;
    height:64px;
    .el-col{
      height:64px;
    }
  }
  .navBtn{
    height:100%;
    display:flex;
    align-items:center;
    p{
       height:100%;
       padding:0 20px;
       display: flex;
       justify-content: center;
       align-items:center;
       cursor: pointer;
       &:hover{
         background:@bg-hover-2;
       }
      i{
        font-size:20px;
        color:@font-color-2;
      }
    }

  }
  .personWrap{
    height:100%;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    padding-right:20px;
    .ul{
      height: 100%;
      display:flex;
      li{
        height: 100%;
        display:flex;
        align-items:center;
        transition: all .2s linear;
        &:hover{
          background: @bg-hover-2;
        }
      }
      .problem{
        width:36px;
        height:100%;

        a{
          width:36px;
          height:64px;
          display:flex;
          justify-content: center;
          align-items: center;
          i{
            font-size:17px;
            color:@font-color-2;
          }
        }
      }
      .person{
        position: relative;
        display:flex;
        padding:0 5px;
        cursor: pointer;
        .el-dropdown{
           width:100%;
           height:100%;
        }
        .dropdown-link{
          width:100%;
          height:100%;
          display:flex;
          align-items: center;
          P{
            &:nth-of-type(1){
              width:30px;
              height:30px;
              padding:2px;
              margin-right:5px;
              border-radius: 50%;
              border:1px solid @border-color;
              img{
                width:100%;
                height:100%;
                border-radius: 50%;
              }
            }
            &:nth-of-type(2){
              color:@font-color-2;
              font-size:12px;
            }
          }


        }
      }
    }
  }


  @media screen and (max-width: @screen-md) {
    .personWrap{
        padding-right:5px;
    }
  }
}


</style>
