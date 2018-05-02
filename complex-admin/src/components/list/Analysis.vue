<template>
   <div class="analysis">
      <div class="analysisCenter">
          <line-chart
            :width="300"
            :height="300">
          </line-chart>
      </div>
   </div>
</template>

<script>
import {LineChart} from '@/public/chart'

export default {
    components: {
      LineChart
    },
   data () {
      return {
        datacollection: null
      }
    },

}
</script>

<style lang="less" scoped>
@import url('../../theme/base-theme.less');

.analysis{
  width:99.6%;
  padding:20px;
  .analysisCenter{
    width:100%;
    padding:20px;
    background:@minor-color-4;
  }
}
</style>
