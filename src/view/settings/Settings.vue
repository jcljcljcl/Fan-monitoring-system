<template>
    <div class="settings">
        <div class="grid_12">
            <div class="box round">
                <div class="block">
                    <table border="0" height="700px" width="100%">
                        <tr height="128" align="center">
                            <td><div @click="guanli"><img src="~assets/img/setting/admin.png" width="128" height="128" alt="admin"></div></td>
                            <td><div><img src="~assets/img/setting/sql.png" width="128" height="128" alt="sql"></div></td>
                            <td><div><img src="~assets/img/setting/history.png" width="128" height="128" alt="history"></div></td>
                            <td><div><img src="~assets/img/setting/config.png" width="128" height="128" alt="config"></div></td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr height="50" align="center">
                            <td><span>账户管理</span></td>
                            <td><span>数据库管理</span></td>
                            <td><span>登录记录</span></td>
                            <td><span>现场管理</span></td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr height="128" align="center">
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr height="50" align="center">
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr height="200">
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr height="50">
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Settings",
        methods:{
            guanli(){
                //跳转到账户管理界面
                this.$router.push('/userinfo');
            }
        }
    }
</script>

<style scoped>
    .settings{
        /*margin-top: 150px;*/
    }
    .block{
       font-size:18px;
        font-color:#000000;
        background:url("~assets/img/setting/flfdj.png");
        background-size:cover;
    }
</style>