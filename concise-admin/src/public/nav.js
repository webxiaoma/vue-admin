
/***
 * 这里是做的一些导航，实际项目中导航可能从后台获取，导航使用的就是 element 中的 el-menu，
 * 当然如果你是从后台获取的导航数据，完全可以删除这里，去Aside.vue 中自己去使用el-menu 组件生成导航
***/
const Nav = [{
    title:'列表信息', // title名
    icon:'fa fa-signal fa-lg', // 导航icon图标
    link:[{
      router:'/', //  一级导航路径
      title:'列表一', //  一级导航title
    },{
      router:'/none',
      title:'不存在的页面一',
    }],
    children:[{  // 二级导航
      title:'选项4',
      link:[{
        router:'/none',
        title:'不存在的页面二'
      }]
    }]
  },{
    title:'表单处理',
    icon:'fa fa-check-square-o fa-lg',
    router:'/home'
    },{
        title:'错误界面',
        icon:'fa fa-times-circle fa-lg',
        link:[{
          router:'/error/403',
          title:'403',
        },{
          router:'/error/404',
          title:'404',
        },{
          router:'/error/500',
          title:'500',
        }],

    }]


export {Nav}
