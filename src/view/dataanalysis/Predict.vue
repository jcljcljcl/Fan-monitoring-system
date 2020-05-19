<template>
    <div>
        <div>
            <div class="title">浅层统计分析：</div>
            <div class="content1">
                <div class="xianggan">
                    <div class="content-title">相干分析</div>
                    <div class="small-title">选择对比分析文件</div>
                    <div class="col1">
                        <input style="font-size: 15px" type="file" />
                        <button>确认</button>
                    </div>
                    <div class="col2">
                        <input style="font-size: 15px" type="file" />
                        <button>确认</button>
                    </div>
                    <div class="small-title">分析结果：</div>
                    <div class="example">
                        <div>频域相干性：</div>
                        <div>SIFT相干性：</div>
                    </div>

                </div>

                <div class="xiangguan">
                    <div class="content-title">相关分析</div>
                    <div class="small-title">分析数据范围选择：
                        <select style="font-size:15px">
                            <option value="1">最近30天</option>
                            <option value="2">最近15天</option>
                            <option value="3">最近5天</option>
                            <option value="4">最近1天</option>
                        </select>
                    </div>
                    <div >
                        <div class="small-title">分析特征选择：
                            <select style="font-size:15px">
                                <option value="1">R-square</option>
                                <option value="2">R-square1</option>
                            </select>
                            &nbsp;&nbsp;
                            <select style="font-size:15px">
                                <option value="1">yaw_speed</option>
                                <option value="2">yaw_speed1</option>
                            </select>
                        </div>
                    </div>
                    <button style="margin-left: 68%;margin-top: 5px">确认</button>
                    <div class="small-title">分析结果：</div>
                    <div class="example">
                        <div>协方差：</div>
                        <div>person相关系数：</div>
                        <div>余弦相似度：</div>
                    </div>
                </div>
                <div class="zhuchengfen">
                    <div class="content-title">主成分分析</div>
                    <div>
                        <div class="small-title">分析数据范围选择：
                            <select style="font-size:15px">
                                <option value="1">最近30天</option>
                                <option value="2">最近15天</option>
                                <option value="3">最近5天</option>
                                <option value="4">最近1天</option>
                            </select>
                        </div>
                    </div>
                    <div style="height: 55%;width: 90%;background-color: #b9c9ba;margin-top: 5px;margin-left: 10px"></div>
                    <div style="text-align: center;margin-top: 5px">主成分累计信息贡献率</div>
                </div>
            </div>
            <div class="title">深层趋势预测：</div>
            <div class="content2">
                <div class="title3">
                    <div class="content-inner">
                        <div class="small-title">
                            预测模型选择：
                            <select style="font-size:15px">
                                <option value="1">18f-LSTM</option>
                                <option value="2">最近15天</option>
                            </select>
                            <button>确认</button>
                        </div>
                    </div>
                    <div  class="content-inner">
                        <div class="small-title">预测执行频率：
                            <select style="font-size:15px">
                                <option value="1">每5分钟</option>
                                <option value="2">每10分钟</option>
                            </select>
                            <button>确认</button>
                        </div>
                    </div>
                    <div class="small-title">
                        当前预测状态
                    </div>
                </div>
                <div class="history">
                    <div style="height: 84%;width: 90%;background-color: #b9c9ba;margin-left: 5%;margin-top: -45px"></div>
                    <div style="text-align: center;margin-top: 5px">历史故障趋势预测走向</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Predict"
    }
</script>

<style scoped>
    .title{
        background-color: #30b3bc;
        line-height: 40px;
        color: #fff;
        font-weight: bold;
    }
    .content1{
        display: flex;
        alignment: center;
        justify-content: space-around;
    }
    .xianggan{
        flex: 1;
        height: 250px;
        width: 200px;

     }
    .xiangguan{
        flex: 1;
        height: 250px;
        width: 200px;

    }
    .zhuchengfen{
        flex: 1;
        height: 250px;
        width: 200px;

    }
    .title3{
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    .history{
        height: 400px;
        width: 100%;
    }
    .content-title{
        text-align: center;
        margin-top: 5%;
        color: #5cb85c;
        font-size: 20px;
        font-weight: bold;
    }

    button{
        background-color: #ee0a24;
        color: #fff;
        padding: 3px;
        border: 0;
    }
    .small-title{

        color: #1b7aee;
        font-weight: bold;
        margin-left: 20%;
        margin-top: 15px;
        display: flex;
    }
    .content-inner{
        width: 300px;
    }
    .col1{
        margin-left: 20%;
        margin-top: 5px;
    }
    .col2{
        margin-left: 20%;
        margin-top: 5px;
    }
    .example{
        margin-left: 20%;
        margin-top: 5px;
    }

</style>