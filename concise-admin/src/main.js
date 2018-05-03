// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false


import './assets/fonts/iconfont.css'  // 引入icon 图标

import 'element-ui/lib/theme-chalk/index.css'  // element 样式
import 'element-ui/lib/theme-chalk/display.css';

import {
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Input,
  Checkbox,
  Tooltip,
  Table,
  TableColumn,
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Tooltip)
Vue.use(Table)
Vue.use(TableColumn)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
