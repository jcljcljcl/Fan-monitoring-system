<template>
    <div class="user-info">
<!--        账户管理-->
        <div id="left_box" class="left_box">
            <div class="title">
                <h2>账户管理</h2>
            </div>
            <div class="box round first">
                <div class="block ">
<!--                    存放表单-->
                    <form action="">
                        <table class="form2">
                            <tr>
                                <td class="col1">
                                    <label>用户名</label>
                                    <span class="error">*</span>
                                </td>
                                <td class="col2">
                                    <input type="text" class="warning" id="username">
                                </td>
                            </tr>
                            <tr>
                                <td class="col1">
                                    <label>密码</label>
                                    <span class="error">*</span>
                                </td>
                                <td class="col2">
                                    <input type="text" class="warning" id="password">
                                </td>
                            </tr>
                            <tr>
                                <td class="col1"><label>姓名</label></td>
                                <td class="col2">
                                    <input type="text" id="">
                                </td>
                            </tr>
                            <tr>
                                <td class="col1"><label>性别</label></td>
                                <td class="col2">
                                    <input type="radio" name="male"><label>男</label>
                                    <input type="radio" name="male" ><label>女</label>
                                </td>
                            </tr>
                            <tr>
                                <td class="col1"><label>出生日期</label></td>
                                <td class="col2">
                                    <input type="text" id="date-picker">
                                </td>
                            </tr>
                            <tr>
                                <td class="col1">
                                    <label>民族</label>
                                </td>
                                <td class="col2">
                                    <input type="text" id="nation" />
                                </td>
                            </tr>
                            <tr>
                                <td class="col1">
                                    <label>联系电话</label>
                                    <span class="error">*</span>
                                </td>
                                <td class="col2">
                                    <input type="text" class="warning" id="telenumber" />
                                </td>
                            </tr>
                            <tr>
                                <td class="col1">
                                    <label>联系地址</label>
                                </td>
                                <td class="col2">
                                    <input type="text" id="address" />
                                </td>
                            </tr>
                            <tr>
                                <td class="col1">
                                    <label>电子邮箱</label>
                                </td>
                                <td class="col2">
                                    <input type="text" id="email" />
                                </td>
                            </tr>
                            <tr>
                                <td class="col1">
                                    <label>单位名称</label>
                                </td>
                                <td class="col2">
                                    <input type="text" id="work" />
                                </td>
                            </tr>
                            <tr>
                                <td class="col1">
                                    <label>邮政编号</label>
                                </td>
                                <td class="col2">
                                    <input type="text" id="postnumber" />
                                </td>
                            </tr>
                            <tr>
                                <td class="col1">
                                    <label>用户图片</label>
                                </td>
                                <td class="col2">
                                    <input type="file" />
                                </td>
                            </tr>
                            <tr>
                                <td class="col1">
                                    <label>账户权限</label>
                                </td>
                                <td class="col2">
                                    <select id="right" name="select" style="font-size:15px">
                                        <option value="1">使用者</option>
                                        <option value="2">管理者</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                        <div class="button blue"><div class="shine"></div>保存用户</div>
                        <div class="button blue"><div class="shine"></div>导入用户</div>
                    </form>
                </div>
            </div>
        </div>
<!--        账户列表-->
        <div class="right_box" id = "right_box">
            <div class="box round first grid">
                <div class="title">
                    <h2>账户列表</h2>
                </div>
                <div class="block">
                    <table class="data display datatable" id="example">
                        <thead>
                        <tr>
                            <th>用户名</th>
                            <th>联系电话</th>
                            <th>姓名</th>
                            <th>权限</th>
                            <th>最近登录时间</th>
                        </tr>
                        </thead>
                        <tbody style="text-align:left">
                        <tr>
                            <td>admin</td>
                            <td></td>
                            <td></td>
                            <td>管理者</td>
                            <td>2017-09-12  14:55</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DataAnalysis from "../dataanalysis/DataAnalysis";
    export default {
        name: "UserInfo",
        components: {DataAnalysis}
    }
</script>

<style scoped>

    #left_box{
        width:45%;
        height:100%;
        float: left;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 10px;
        padding-bottom: 50px;
        margin-left: 5px;
        margin-top: 20px;
        margin-bottom: 50px;
        border-radius: 5px;
        font-size: 20px;
        background-color: #4d8cbc;
    }
    #right_box{
        width:50%;
        height:100%;
        float: right;
        background-color: #4d8cbc;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 10px;
        padding-bottom: 50px;
        margin-left: 5px;
        margin-top: 20px;
        margin-bottom: 50px;
        margin-right: 40px;
        border-radius: 5px;
        font-size: 20px;
        color: #1b1b1b;
    }

    .user-info {
        font-family: 'museoslab500';
        background: #333;
        font-size: 75%;
        text-align: center;
        -webkit-user-select: none;
        -o-user-select: none;
        user-select: none;

    }

    .info a {
        text-decoration:none;
        color:#fff;
        font-size:15px
    }

    .button {
        min-height: 1.5em;
        display: inline-block;
        padding: 12px 36px;
        margin: 40px 5px 5px 0px;
        cursor: pointer;
        opacity: 0.9;

        color: #FFF;
        font-size: 1em;
        letter-spacing: 1px;
        text-shadow: rgba(0,0,0,0.9) 0px 1px 2px;

        background: #434343;
        border: 1px solid #242424;

        -webkit-border-radius: 4px;
        -khtml-border-radius: 4px;
        -moz-border-radius: 4px;
        -o-border-radius: 4px;
        border-radius: 4px;
        -webkit-box-shadow: rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
        -khtml-box-shadow: rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
        -moz-box-shadow: rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
        -o-box-shadow: rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
        box-shadow: rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
        -webkit-transition: all 0.1s linear;
        -khtml-transition: all 0.1s linear;
        -moz-transition: all 0.1s linear;
        -o-transition: all 0.1s linear;
        transition: all 0.1s linear;
    }
    .button:hover {
        -webkit-box-shadow: rgba(0,0,0,0.5) 0px 2px 5px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
        -khtml-box-shadow: rgba(0,0,0,0.5) 0px 2px 5px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
        -moz-box-shadow: rgba(0,0,0,0.5) 0px 2px 5px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
        -o-box-shadow: rgba(0,0,0,0.5) 0px 2px 5px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
        box-shadow: rgba(0,0,0,0.5) 0px 2px 5px, inset rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(0,0,0,0.25) 0px 0px 0px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
    }
    .button:active {
        -webkit-box-shadow: rgba(255,255,255,0.25) 0px 1px 0px,inset rgba(255,255,255,0) 0px 1px 0px, inset rgba(0,0,0,0.5) 0px 0px 5px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
        -khtml-box-shadow: rgba(255,255,255,0.25) 0px 1px 0px,inset rgba(255,255,255,0) 0px 1px 0px, inset rgba(0,0,0,0.5) 0px 0px 5px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
        -moz-box-shadow: rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(255,255,255,0) 0px 1px 0px, inset rgba(0,0,0,0.5) 0px 0px 5px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
        -o-box-shadow: rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(255,255,255,0) 0px 1px 0px, inset rgba(0,0,0,0.5) 0px 0px 5px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
        box-shadow: rgba(255,255,255,0.25) 0px 1px 0px, inset rgba(255,255,255,0) 0px 1px 0px, inset rgba(0,0,0,0.5) 0px 0px 5px, inset rgba(255,255,255,0.03) 0px 20px 0px, inset rgba(0,0,0,0.15) 0px -20px 20px, inset rgba(255,255,255,0.05) 0px 20px 20px;
    }
    .shine {
        display: block;
        position: relative;
        background: -moz-linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
        background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(50%,rgba(255,255,255,1)), color-stop(100%,rgba(255,255,255,0)));
        background: -webkit-linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%);
        background: -o-linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%);
        background: -ms-linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#00ffffff',GradientType=1 );
        background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%);
        padding: 0px 12px;
        top: -12px;
        left: -24px;
        height: 1px;
        -webkit-box-shadow: rgba(255,255,255,0.2) 0px 1px 5px;
        -khtml-box-shadow: rgba(255,255,255,0.2) 0px 1px 5px;
        -moz-box-shadow: rgba(255,255,255,0.2) 0px 1px 5px;
        -o-box-shadow: rgba(255,255,255,0.2) 0px 1px 5px;
        box-shadow: rgba(255,255,255,0.2) 0px 1px 5px;
        -webkit-transition: all 0.3s ease-in-out;
        -khtml-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    .button:hover .shine {left: 24px;}
    .button:active .shine {opacity: 0;}

    .button.gray {background: #555;}
    .button.blue {background: #3a617e;}
    .button.green {background: #477343;}
    .button.red {background: #723131;}
    .button.purple {background: #4b3f5e;}
    .button.orange {background: #624529;}

    label{
        font-family: '华文行楷', sans-serif;
        font-size: 20px;
        color: black;
    }
    span{
        color: #ee0a24;
    }
    h2{
        color: #feeff9;
        font-family: 楷体;
    }
    thead{
        background-color: #EE5757;
        color: #fff;
    }
    .title{
        height: 100px;
        /*利用行高设置垂直居中*/
        line-height: 100px;
    }

</style>