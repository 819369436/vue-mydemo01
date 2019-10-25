import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css';//引入自定义全局样式

import MyHttpUtil from './plugins/httpUtils.js'

//全局注册插件
Vue.use(ElementUI);
Vue.use(MyHttpUtil);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
