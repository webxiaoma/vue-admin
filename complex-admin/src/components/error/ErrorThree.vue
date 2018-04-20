<template>
  <div class="errorWarp">
     <div class="errorCenter">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="14" :md="14" :lg="13" :xl="13">
            <div class="picture">
            </div>
            </el-col>
          <el-col :xs="24" :sm="10" :md="10" :lg="11" :xl="11">
            <div class="grid-content">
              <h3>500</h3>
              <p class="text">抱歉，服务器发生错误</p>
              <p class="btn">
                <el-button type="primary">
                  <router-link to="/">返回首页</router-link>
                </el-button>
              </p>
            </div>
          </el-col>
        </el-row>
     </div>
  </div>
</template>


<script>
export default {

}
</script>

<style lang="less" scoped>
@import url("../../theme/base-theme.less");


.errorWarp{
   width:100%;
   height:100%;
   position: absolute;
   top:0;
   bottom:0;
   display:flex;
   flex-grow:1;
   .errorCenter{
      width:100%;
      display:flex;
      align-items: center;
      .el-row{
        width:100%;
        .el-col{
          height: 100%;
          display:flex;
          &:nth-of-type(1){
            justify-content: flex-end;
          }
        }
      }
      .picture{
         width:550px;
         height:200px;
         display:flex;
         margin-right:40px;
         background: url('../../assets/fonts/500.svg') no-repeat center  center;
         background-size: auto 100%;
      }
      .grid-content{
        width:100%;
        text-align: left;
        h3{
          font-size:60px;
          color:@font-color-2;
        }
        .text{
          margin:20px 0 15px;
          font-size:18px;
          color:@font-color-2;
        }
        .btn{
          a{
            color:#fff;
          }
        }
      }
   }
}

@media screen and (max-width: @screen-xs) {
.errorWarp{
  .errorCenter{
      .picture{
        width:100%;
        height:120px;
        margin-right:0px;
      }
      .grid-content{
        margin-top:10px;
        text-align: center;
      }
      .el-row{
        .el-col{
          &:nth-of-type(1){
            justify-content: center;
          }
        }
      }
  }
}



}

</style>
