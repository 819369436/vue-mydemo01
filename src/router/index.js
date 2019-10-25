import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from "../components/HelloWorld";

//使用@它会自动找到src下的文件夹,这webpack的封装功能
import Login from "../components/login/login.vue";
import Home from "../components/home/home.vue";
import User from "../components/user/userList.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',           //这个表示的是根目录，即一进入的页面
            redirect:'login'    //设置页面一进来就显示的页面，即重定向到goods组件，这里写的内容是对应组将的component的值
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children:[
                {
                    path: '/user',
                    name: 'user',
                    component: User
                }
            ]
        },
    ]
})

