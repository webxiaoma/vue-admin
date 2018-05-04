<template>
  <div class="upload">
      <div class="center">
          <div class="title">
             vue-cropperjs 插件是 Vue 图片剪裁插件
           <a href="https://github.com/Agontuk/vue-cropperjs" target="_blank"> vue-cropperjs</a>
         </div>
         <div class="clip">
             <vueCropper
                 ref="cropper"
                :src="example2.img"
                :outputSize="example2.size"
                :outputType="example2.outputType"
                :info="example2.info"
                :canScale="example2.canScale"
                :autoCrop="example2.autoCrop"
                :autoCropWidth="example2.autoCropWidth"
                :autoCropHeight="example2.autoCropHeight"
                :fixed="example2.fixed"
                :fixedNumber="example2.fixedNumber">
            </vueCropper>
         </div>
         <div>
            <img :src="previews.url" alt="">
         </div>
      </div>
  </div>
</template>

<script>
import vueCropper from 'vue-cropper'


export default {
    data() {
      return {
        example2: {
            img: 'http://ofyaji162.bkt.clouddn.com/bg1.jpg',
            info: true,
            size: 1,
            outputType: 'jpeg',
            canScale: false,
            autoCrop: true,
            // 只有自动截图开启 宽度高度才生效
            autoCropWidth: 300,
            autoCropHeight: 250,
            // 开启宽度和高度比例
            fixed: true,
            fixedNumber: [4, 3]
        },
        previews: {},
      }
    },
    methods:{
       realTime(data){ // 实时预览函数
           this.previews = data
       }
    },
    components:{
       vueCropper,
    }
}
</script>


<style lang="less" scoped>
@import url("../../theme/base-theme.less");

.upload{
   background:@minor-color-4;
   padding:20px;
   margin:10px 0;
   display:flex;
   justify-content: center;
   font-size:20px;
   .center{
     width:100%;
     .title{
        height:30px;
        display:flex;
        align-items:center;
        justify-content: center;
        margin-bottom:30px;
        font-size:20px;
        a{
          margin-left:10px;
          font-size:22px;
          color:@minor-color-3;
        }
     }
     .clip{
       width:100%;
       height:400px;
     }
   }
}
</style>
