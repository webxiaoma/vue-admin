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
              <h3>404</h3>
              <p class="text">抱歉，你访问的页面不存在</p>
              <p class="btn">
                <!-- <el-button type="primary">
                  <router-link to="">返回首页</router-link>
                </el-button> -->
                {{time}} 秒之后自动返回首页
              </p>
            </div>
          </el-col>
        </el-row>
     </div>
  </div>
</template>


<script>
export default {
   data() {
     return {
       time: 5,
       interval:'',
     }
   },
   created(){
      this.timeStart()
   },
   destroyed(){
       clearInterval(this.interval);
   },
   methods:{
     timeStart(){
       this.interval = setInterval(()=>{
          if(this.time == 0){
             clearInterval(this.interval);
             this.$router.push('/')
             return;
          }
          this.time--
       },1000)
     }
   }
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
         width:450px;
         height:300px;
         display:flex;
         margin-left:40px;
         background: url('../../assets/fonts/404.svg') no-repeat center  center;
         background-size: auto 100%;
      }
      .grid-content{
        width:100%;
        margin-top:60px;
        text-align: left;
        text-indent:30px;
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
          font-size:15px;
        }
      }
   }
}

@media screen and (max-width: @screen-xs) {
.errorWarp{
  .errorCenter{
      .picture{
        width:100%;
        height:190px;
        margin-left:0px;
      }
      .grid-content{
        margin-top:10px;
        text-align: center;
        text-indent:0px;
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
