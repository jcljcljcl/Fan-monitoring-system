<template>
    <div>
        <div class="title">新增样本人工监听标定：</div>
        <div class="content1">
            <div class="left"></div>
            <div class="right">
                <div class="shiyu"></div>
                <div class="sift"></div>
            </div>
        </div>
        <div class="title">模型增量更新控制：</div>
        <div class="content2">
            <div class="left"></div>
            <div class="right">
                <div class="yuanshi"></div>
                <div class="youhua"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Model"
    }
</script>

<style scoped>
    .title{
        background-color: #30b3bc;
        line-height: 40px;
        color: #fff;
        font-weight: bold;
    }
    .left{
         background-color: #ee0a24;
         height: 250px;
         width: 30%;
     }
    .right{
        background-color: #eeb5da;
        height: 250px;
        width: 70%;
        display: flex;
    }
    .shiyu{
        background-color: #5cb85c;
        height: 100%;
        width: 50%;
    }
    .sift{
        background-color: #DDFF75;
        height: 100%;
        width: 50%;
    }

    .yuanshi{
        background-color: #5cb85c;
        height: 100%;
        width: 50%;
    }
    .youhua{
        background-color: #DDFF75;
        height: 100%;
        width: 50%;
    }
</style>