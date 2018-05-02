
/*
  这里对导航做了处理只遍历了三级页面
*/

const Nav = [{
  title:'列表信息', // 主title
  icon:'fa fa-signal fa-lg', // 一级导航图标
  link:[{
    router:'/', //  一级导航路径
    title:'数据列表', //  一级导航title
  },{
    router:'/analysis',
    title:'拖拽列表',
  }],
  children:[{  // 二级导航
    title:'选项4',
    link:[{
      router:'/none',
      title:'不存在的页面二'
    }]
  }]
},{
    title:'表单处理', // 主title
    icon:'fa fa-check-square-o fa-lg', // 一级导航图标
    link:[{
      router:'/1', //  一级导航路径
      title:'数据列表', //  一级导航title
    },{
      router:'/analysis',
      title:'数据分析',
    }],
    children:[{  // 二级导航
      title:'选项4',
      link:[{
        router:'/none',
        title:'不存在的页面二'
      }]
    }]
  },{
    title:'图表数据',
    icon:'fa fa-area-chart fa-lg',
    link:[{
      router:'/error/403',
      title:'403',
    }],

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

  },{
    title:'错误界面',
    icon:'fa fa-times-circle fa-lg',
    router:'/error/403',
  }]


export {Nav}
