import request from '@/utils/request'
import {loginUrl} from './apis'


export default {
     login(obj){ //首页列表请求
        return request(loginUrl.LOGIN,{
          method: 'post',
          data:obj,
        })
     }
}
