
const Mock = require('mockjs');



// 登录处理
let loginData = {
   userName:'admin',
   password:'123456',
}

Mock.mock('/api/login','post',(req, res)=>{
  let len = Mock.valid(loginData,JSON.parse(req.body)).length;
  if(len !== 0){
    return {
       data:'账号或登录密码错误',
    }
  }

  let ary = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','z','s','q','K','L','M','N','Q','J','l','i','u','%','#']; // 30
  let token="";
  for(let i=0;i<30;i++){
    token += ary[Math.floor(Math.random()*30)]
  }
  return {
     data:{token}
  }

})



//  首页处理

const list = Mock.mock({
  'list|1-5':[{
      userName:'小王',
      address:'上海'
    },{
      userName:'小李',
      address:'北京'
    },{
      userName:'小牛',
      address:'深圳'
    },{
      userName:'小王',
      address:'河北'
    },{
      userName:'小刘',
      address:'福建'
    },{
      userName:'小明',
      address:'重庆'
    }]
})
Mock.mock('/api/list','get',(req, res)=>{
  return list
})






Mock.setup({
  timeout: '1000-3000', // 1-3秒后响应数据
})
