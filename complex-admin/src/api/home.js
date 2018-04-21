import request from '@/utils/request'
import {homeUrl} from './apis'


export default {
     homeList(){ //首页列表请求
        return request(homeUrl.LIST,{
          method: 'get',
          data:{obj:111}
        })
     }
}
