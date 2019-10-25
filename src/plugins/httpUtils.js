//自定义插件模块

import axios from 'axios';


const MyHttpUtil = {};

MyHttpUtil.install = (Vue) => {

    //设置一下接口的基本地址前缀
    axios.defaults.baseURL = 'http://localhost:8888/api/vuemydemotest/';


    // 4. 添加实例方法
    Vue.prototype.$http = axios;
}

export default MyHttpUtil
