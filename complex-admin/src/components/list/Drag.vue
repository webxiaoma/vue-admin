<template>
   <div class="dragWrap">
      <div class="dragCenter">
         正在建设中...
      </div>
   </div>
</template>

<script>

export default {
   data () {
      return {

      }
    },

}
</script>

<style lang="less" scoped>
@import url('../../theme/base-theme.less');

.dragWrap{
  width:99.8%;
  padding:20px;
  .dragCenter{
    width:100%;
    padding:20px;
    background:@minor-color-4;
    text-align: center;
  }
}
</style>
