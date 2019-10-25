<template>
    <!--<div>-->
        <el-container class="container">
            <el-header class="header">
                <el-row>
                    <el-col :span="4">
                        <div class="grid-content bg-purple">
                            <img src="../../assets/logo.png" alt="无法显示该图片" style="width: 100%;height: 64px;" />
                        </div>
                    </el-col>
                    <el-col :span="18" class="middle-title">
                        <h3>项目后台管理系统</h3>
                    </el-col>
                    <el-col :span="2">
                        <div class="grid-content bg-purple" style="line-height: 60px;">
                            <a class="logout" href="#" @click="logout">退出</a>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside class="aside" width="200px">
                    <!--侧栏：左侧-->
                    <el-menu
                            :router="true"
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            :unique-opened="true">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>用户管理</span>
                            </template>
                            <el-menu-item index="user">
                                <i class="el-icon-menu"></i>
                                用户列表
                            </el-menu-item>
                            <!--<el-submenu index="1-4">-->
                                <!--<template slot="title">选项4</template>-->
                                <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
                            <!--</el-submenu>-->
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>权限管理</span>
                            </template>
                            <el-menu-item index="1-1">
                                <i class="el-icon-menu"></i>
                                角色分配
                            </el-menu-item>
                        </el-submenu>

                    </el-menu>

                </el-aside>
                <el-main class="main">

                    <!--主要内容展示：右侧-->
                    <router-view></router-view>

                </el-main>
            </el-container>
        </el-container>

    <!--</div>-->
</template>

<script>
    export default {
        name: "home",
        //beforeCreate函数在newVue实例之前自动触发
        beforeCreate(){//使用beforeCreate钩子函数
            //从localStorage中拿token，没有则返回login页面
            const token = localStorage.getItem('token');
            if(!token){
                this.$router.push({name:'login'})
            }

        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            logout(){//退出登录

                localStorage.clear();
                this.$message({message: '退出成功',type: 'success'});
                this.$router.push({name:'login'})
            }
        }
    }
</script>

<style lang="scss" scoped>

    .container{
        height: 100%;
        .header{
            background-color: #b3c0d1;
            .middle-title{
                text-align: center;
            }
            .logout{
                text-decoration: none;
            }
        }

        .aside{
            background-color: #d3dce6;
        }

        .main{
            background-color: #e9eef3;

        }

    }

</style>
