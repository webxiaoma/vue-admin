
import {Line, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  minis:[reactiveProp],
  props:{
    data:{
      type:Object,
    },
    options:{
      type:Object,
    },
  },
  data(){
    return {
      datacollection: {
        labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月","8月","9月","10月","11月","12月"],
        datasets: [{
              label: "我的第一个",
              backgroundColor:[ // 背景颜色
                'rgba(255, 99, 132, 0.2)',
              ],
              strokeColor: "rgba(20,120,20,1)",
              pointColor: "rgba(20,120,210,1)",
              pointStrokeColor: "#786",
              pointHighlightFill: "#098",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: [65, 59, 80, 81, 56, 55, 40],
              borderWidth: 2,  // 线条宽度
              scaleGridLineColor : "rgba(100,30,40,.05)",
          },
          {
            label: "我的第二个",
            backgroundColor:'rgba(111,18,205,0.2)',
            strokeColor: "rgba(20,120,20,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      },
      optionsInit:{
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  },
  mounted () {
    let data = Object.assign({},this.datacollection,this.data)
    let options = Object.assign({},this.optionsInit,this.options)
    this.renderChart(data,options)
  }
}
