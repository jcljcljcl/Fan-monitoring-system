<template>
    <div class="grid_12">
        <div class="box round">
            <div class="block" >
                <h2>智能数据分析</h2>
                <hr style="color: rgba(26,48,146,0.44)">
                <table border="0" height="700px" width="100%">
                    <tr height="128" align="center">
                        <td><div @click="buttonClick"><img src="~assets/img/dataanalysis/analysis.png" width="128" height="128" alt="analysis"></div></td>
                        <td><div><img src="~assets/img/dataanalysis/report.png" alt="report"></div></td>
                        <td><div><img src="~assets/img/dataanalysis/diagnosis.png" alt="diagnosis"></div></td>
                        <td><div  @click="modelClick"><img src="~assets/img/dataanalysis/modelUpdate.png" alt="modelUpdate"></div></td>
                        <td><div><img src="~assets/img/dataanalysis/repair.png" alt="repair"></div></td>
                    </tr>

                    <tr height="50" align="center">
                        <td><span>故障统计与分析</span></td>
                        <td><span>个性化报表定制</span></td>
                        <td><span>交互式诊断</span></td>
                        <td><span>模型优化</span></td>
                        <td><span>维修方案定制与发布</span></td>
                    </tr>

                    <tr height="128" align="center">
                        <td><img src="~assets/img/dataanalysis/buy.png" alt="buy"></td>
                        <td valign="middle" @click="predictClick"><img src="~assets/img/dataanalysis/predict.png" alt="predict"></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr height="50" align="center">
                        <td><span>采购方案决策支持</span></td>
                        <td><span>故障趋势预测</span></td>
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
</template>

<script>
    export default {
        name: "DataAnalysis",
        methods:{
            buttonClick(){
                //跳转到故障分析网页
                this.$router.push('/analysis');
            },
            predictClick(){
                //跳转到故障预测网页
                this.$router.push('/predict');
            },
            modelClick(){
                //跳转到模型优化网页
                this.$router.push('/model');
            }
        }
    }
</script>

<style scoped>
    .grid_12 {
        /*margin-top: 300px;*/
    }
    .block{
        background-image: url("~assets/img/dataanalysis/flfdj2.jpg");
        font-size:18px;
        font-color:#000000;
        background-size:cover;
    }
    h2{
        font-size:15px;
        color: #0579bc;
        font-family: "Times New Roman";
        padding: 10px;
    }
</style>