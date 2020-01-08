import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入axios
import axios from 'axios'
// 导入抽离vantjs组件注册的js文件
import './plugins/vant.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false
// 配置基地址
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
// 挂载给Vue的原型
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
