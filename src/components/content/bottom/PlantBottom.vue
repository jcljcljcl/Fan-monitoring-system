<template>
    <div class="bottom">
        <nav-bar class="bottom-bar">
            <div slot="left"><p>北京邮电大学 设备健康与智能实验室 版权所有</p></div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../common/navbar/NavBar";
    export default {
        name: "PlantBottom",
        components:{
            NavBar
        }
    }
</script>

<style scoped>
    .bottom-bar{
        position: fixed;
        bottom: 0;
    }
    .bottom-bar div{
        width: 1500px;
        color: #fff;
        background-color: #4d8cbc;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
        font-size: 15px;
        height: 40px;
    }
    .bottom-bar p{
        margin-left: 15px;
    }
</style>