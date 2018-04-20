<template>
  <div class="footerWrap" >
     <div class="footerCenter">
        <p class="footerTop">
          <a href="http://www.webxiaoma.com/" target="_blank">
            <i class="iconfont icon-wangzhan"> 个人网站</i>
          </a>
          <a href="">
            <i class="iconfont icon-GitHub"> GitHub</i>
          </a>
          <span></span>
        </p>
        <p>Copyright 2018 webxiaoma</p>
     </div>
  </div>
</template>
<script>
export default {
  name: 'FooterLayout',
  data(){
    return{

    }
  },
}
</script>

<style lang="less" scoped>

@import url("../../theme/base-theme.less");

.footerWrap{
   height:80px;
   display:flex;
   justify-content:center;
   background:@body-color;
   text-align:center;
   color:@font-color-3;
   .footerCenter{
     p{
       margin-top:10px;
       a{
        &:hover{
          color:@minor-color-3;
        }
       }
     }
     .footerTop{
       a{
         margin-left:10px;
         i{
           font-size:14px;
         }
       }
     }
   }
}

@media screen and (max-width: @screen-md) {
.footerWrap{
   height:50px;
}

}
</style>
