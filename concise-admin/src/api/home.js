import request from '@/utils/request'
import {homeUrl} from './apis'

export default{
     home(){ // 首页数据请求
        return request(homeUrl.home,{
          // method: 请求方法,
          // patterns：作为路径的数据(数组)，
          // params: query形式的数据,
          // data: body携带的数据,
          // headers: 头部设置,
        })
     }
}
