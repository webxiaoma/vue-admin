<template>
   <div class="analysis">
      <div class="analysisCenter">
          <line-chart
        :width="300"
        :height="200"></line-chart>
      </div>
   </div>
</template>

<script>
import LineChart from '../chart/LineChart.js'
console.log(LineChart)

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
    padding:20px 0;
    background:@minor-color-4;
  }
}
</style>
