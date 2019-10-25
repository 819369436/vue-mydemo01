<template>
    <div class="login-wrap">

        <el-form class="login-form" :label-position="labelPosition" :rules="rules" label-width="80px" :model="userInfo" ref="loginDom">
            <h2>用户登录</h2>
            <el-form-item label="账户" prop="name">
                <el-input v-model="userInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="name">
                <el-input type="password" v-model="userInfo.password"></el-input>
            </el-form-item>
            <el-button class="login-btn" @click="login()" type="primary">登录</el-button>
        </el-form>



    </div>
</template>

<script>
    export default {
        data() {
            return {
                labelPosition: 'top',
                userInfo: {
                    name: '',
                    password: '',
                    type: ''
                },
                rules:{
                    name :[{required: true, message: '请输入', trigger: 'blur'}],
                    password :[{required: true, message: '请输入', trigger: 'blur'}]
                }
            };
        },
        methods:{



            login(){ //登录

                this.$refs.loginDom.validate(valid => {
                    if(valid){
                        // alert('submit!');
                        this.$http.post('login', this.userInfo).then(res => {
                            console.log(res);
                            if(res.status === 200){
                                this.$message({
                                    message: '恭喜你，登录成功',
                                    type: 'success'
                                });


                                //登录成功后，后端接口会返回一个token值，把token存到localStorage
                                var token = 'abcd123456';//此项目所有接口是测试接口，没有任何数据返回，
                                // 现在模拟一个token数据
                                localStorage.setItem('token', token);//把token存入localStorage


                                //路由跳转
                                this.$router.push({ name: 'home' })
                            }
                        });

                    }else{
                        console.log('error submit!!');
                        return false;
                    }
                });



            },
            resetForm(formData){
                this.$refs[formData].resetFilds();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-wrap{
        height: 100%;
        background-color: #324152;
        /*弹性盒子布局*/
        display: flex;
        justify-content: center;
        align-items: center;
        .login-form{
            width: 400px;
            background-color: #fff;
            border-radius: 5px;
            padding: 30px;

            .login-btn{
                width: 100%;
            }
        }


    }
</style>
