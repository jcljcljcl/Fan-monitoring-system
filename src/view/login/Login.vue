<template>
    <div id="login">
        <div class="header_logo">
            <img src="../../assets/img/login_img/header.png" alt="">
        </div>
        <div class="header">
            <br>
            智能管理监控平台
        </div>
        <div class="login_user">
            <form action="" method="post">
                <br><br>
                用户名：<input type="text"  placeholder="username"  name="username" v-model="username">
                <br><br>
                密   码：<input type="password" placeholder="password"  name="password" v-model="password">
                <br><br>
                <div class="login-button" @click="loginClick" type="submit">Login</div>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Login",
        components:{
        },
        data(){
            return{
                username:'',
                password:''
            }
        },
        created() {
            //从store中拿到用户名和密码
            this.$store.dispatch("getUserInfo");
        },
        methods:{
            loginClick(){
                if(this.username === this.$store.state.username && this.password === this.$store.state.password){
                    //跳转到vuex中的actions来获取数据库风场经纬度数据
                    this.$store.dispatch("updateLoopImg");
                    //跳转到首页
                    this.$router.push('/home');
                }else{
                    //重新输入
                    alert("账号密码不正确,请重新输入");
                }
             }
        }
    }
</script>

<style scoped>
    .header_logo img{   
        height: 128px;
        width: 128px;
        position: relative;
        left: 630px;
        top:80px;
    }

    .header{
        text-align: center;
        font-size: 45px;
        color: #feded9;
        font-family: '华文行楷', sans-serif;
        font-weight: 200;
        position: relative;
        top: 60px;
    }
    .login_user{
        text-align: center;
        position: relative;
        top:130px;
    }
    #login{
        position: absolute;
        top: -20px;
        left: -20px;
        right: -40px;
        bottom: -40px;
        width: auto;
        height: auto;
        background-image: url("../../assets/img/login_img/bg.png");
        background-size: cover;
        -webkit-filter: blur(0px);
        z-index: 0;
    }


    .login_user input[type=text]{
        width: 250px;
        height: 30px;
        background: transparent;
        border: 1px solid rgba(255,255,255,0.6);
        border-radius: 2px;
        color: #fff;
        font-family: 'Exo', sans-serif;
        font-size: 16px;
        font-weight: 400;
        padding: 4px;
    }
    .login_user input[type=password]{
        width: 250px;
        height: 30px;
        background: transparent;
        border: 1px solid rgba(255,255,255,0.6);
        border-radius: 2px;
        color: #fff;
        font-family: 'Exo', sans-serif;
        font-size: 16px;
        font-weight: 400;
        padding: 4px;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .login-button{
        width: 200px;
        height: 35px;
        background: #d9ff00;
        border: 1px solid #fff;
        cursor: pointer;
        border-radius: 2px;
        color: #a18d6c;
        font-family: 'Exo', sans-serif;
        font-size: 16px;
        font-weight: 400;
        padding: 10px;
        margin-top: 10px;
        margin-left: 70px;
    }

    .login_user{
        position: absolute;
        top: calc(50% - 1px);
        left: calc(50% - 175px);
        height: 250px;
        width: 350px;
        padding: 10px;
        z-index: 2;
        text-align:center;
        margin:0 auto;
        color: #fff;
        border-top:2px solid #ffffff;
        border-left:2px solid #ffffff;
        border-right:2px solid #ffffff;
        border-bottom:2px solid #ffffff;
        border-radius: 8px 8px 8px 8px;
    }
    .login_user input[type=text]:focus{
        outline: none;
        border: 1px solid rgba(239, 255, 71, 0.9);
    }
    .login_user input[type=password]:focus{
        outline: none;
        border: 1px solid rgba(239, 255, 71, 0.9);
    }
</style>