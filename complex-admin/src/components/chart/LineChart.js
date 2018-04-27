
import {Line} from 'vue-chartjs'

export default {
  extends: Line,
  data(){
    return {
      datacollection: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
              label: "我的第一个",
              backgroundColor:'rgba(20,220,220,0.1)',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "我的第二个",
            backgroundColor:'rgba(111,18,205,0.2)',
            data: [28, 48, 40, 19, 86, 27, 90]
          }
          ]
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
  }
}
