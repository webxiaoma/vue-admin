# vue后台管理模板（简洁版）

![webxiaoma](https://camo.githubusercontent.com/e43a07bf4ca1ffa4f148fc3018fd4ab424272dd4/68747470733a2f2f7765627869616f6d612e6769746875622e696f2f6f746865722f6d616e6f6e672e6a7067)
### 一、使用方法

1. 下载该项目 `git clone git@github.com:webxiaoma/vue-admin.git` 打开 `concise-admin` 目录

2. 执行以下命令

```
npm install

npm start
```


### 二、文件目录说明

**1.这里主要讲解src目录下的文件**

其它文件主要是 `vue-cli` 的文件目录，如果对`vue-cli` 目录不太清楚请 [点击这里](https://github.com/webxiaoma/vue-demos/tree/master/vue-cli)


下面主要看`src` 中的目录结构

```
|-- src                           // 源码目录
|   |-- api                          // api请求接口目录（里面apis 存储所有api接口，还可以对应页面建目录，来写api请求）
|   |   |--apis                         // 存储所有api接口
|   |   |--home.js                      // 首页接口请求
|   |-- assets                       // 存储静态资源文件
|   |   |-- fonts                       // fonts 字体文件 （引用的阿里巴巴矢量图库的）
|   |   |-- img                         // 网页图片文件
|   |-- components                   // vue公共组件
|   |   |-- error                       // 错误组件目录
|   |   |   |-- ErrorOne.vue               // 403错误组件
|   |   |   |-- ErrorThree.vue             // 404错误组件
|   |   |   |-- ErrorTwo.vue               // 500错误组件
|   |   |   |-- index.js                   // 整合组件
|   |   |-- layout                      // 页面架构组件目录
|   |   |   |-- Aside.vue                  // 左侧导航组件
|   |   |   |-- Footer.vue                 // 页脚组件
|   |   |   |-- Header.vue                 // 头部组件
|   |   |   |-- index.js                   // 整合组件
|   |   |-- list                        // 列表目录
|   |   |   |-- Home.vue                   // 首页组件
|   |   |   |-- index.js                   // 整合组件
|   |   |-- Login.vue                   // 登录组件
|   |   |-- MainLayout.vue              // 网站整体构架的搭建组建
|   |-- public                       // 公共方法
|   |   |-- nav.js                      // 导航内容管理包括导航标题、icon、router （基于element 导航组件）
|   |   |-- rules.js                    // 表单的验证规则，（基于element的表单验证）
|   |-- router                       // 路由文件
|   |   |-- index.js                    // 路由管理
|   |-- store                        // vuex的状态管理
|   |   |-- modules                    // store模块
|   |   |-- index.js                   // store入口文件
|   |   |-- mutation-types.js          // 管理mutation 文件
|   |-- theme                        // 存放一些公共主题样式，比如页面的主色调，副色调，hover色调，按钮色调
|   |   |-- base-theme.less            // 主题颜色less文件
|   |-- utils                        // 针对项目对异步请求的一些封装目录（我这里对axios进行了简单的封装）
|   |   |-- request.js                 // 对axios 请求方法的简单封装
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件

```


### 三、注意事项

1. 该项目已经依赖了 `axios`、`element-ui`、`vue-router`、`vuex`,并使用了 `less` 来处理css,如果您想更相应的版本，请查看 `package.json`

2. 关于数据请求，也就是utils 文件中的 request.js 暴露出的请求接口如下

```
request('url',{ // url 为apis中的请求路径 可以查看api中的home.js文件了解
    // method: 请求方法,
    // patterns：作为路径的数据(数组)，
    // params: query形式的数据,
    // data: body携带的数据,
    // headers: 头部设置,
})
```
