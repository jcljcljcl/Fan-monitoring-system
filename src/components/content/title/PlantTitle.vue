<template>
    <div class="title">
<!--        标题栏-->
        <nav-bar class="nav-bar">
            <div slot="left" class="left"><img src="~assets/img/home/home_title/white-logo.png" alt=""></div>
            <div slot="center" class="center">智能监测管理平台</div>
            <div slot="right" class="right">
                <table>
                    <tr>
                        <td> <img src="~assets/img/home/home_title/img-profile.jpg" alt=""></td>
                        <td><h4>admin</h4></td>
                        <td><button @click="setting">设置</button></td>
                        <td><button @click="exitHome">退出</button></td>
                    </tr>
                </table>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../common/navbar/NavBar";
    export default {
        name: "PlantTitle",
        data(){
            return{
                titles:["概况","实时监测","节点管理","智能数据分析","设置"]
            }
        },
        components:{
            NavBar
        },
        methods:{
            setting(){
                alert("开始设置");
            },
            exitHome(){
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    .nav-bar{
        background-color: #4d8cbc;
        height: 100px;
    }
    .left img{
        height: 80px;
        width: 80px;
        text-align: center;
        margin-left: 80px;
        margin-top: 10px;
    }
    .center{
        font-size: 60px;
        margin-top: 30px;
        color: #fff;
        font-family: '华文行楷', sans-serif;
    }

    .right{
        margin-right: 150px;
    }
    .right img{
        margin-top: 55px;
    }
    .right h4{
        margin-top: 50px;
        width: 50px;
        color: #fff;
    }
    .right button{
        height: 20px;
        width: 40px;
        margin-top: 60px;
        color: #fff;
        background-color: #4d8cbc;
        border: 0;
    }
</style>