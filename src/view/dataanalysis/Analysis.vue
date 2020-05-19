<template>
    <div class="analysis">
        <div class="left">
            <side-bar class="left-in"  @analysis="changeName"></side-bar>
        </div>
        <div class="middle">
            <hr style="color: rgba(26,48,146,0.44);margin-top: 1px">
            <div class="title1">{{fengchang_name}}-15日报警时段统计</div>
            <hr style="color: rgba(26,48,146,0.44);margin-top: 15px">
            <div id="analysis" class="analysis_regional"></div>
            <hr style="color: rgba(26,48,146,0.44);margin-top: 1px">
            <div class="title2">近15天报警统计</div>
            <hr style="color: rgba(26,48,146,0.44);margin-top: 15px">
            <div id="analysis_15day" class="analysis_15day"></div>
            <hr style="color: rgba(26,48,146,0.44);margin-top: 1px">
            <div>
                <div class="title3">报警区域占比</div>
                <div class="title4">报警时段占比</div>
            </div>
            <hr style="color: rgba(26,48,146,0.44);margin-top: 28px">
            <div>
                <div id="in_left" class="in_left"></div>
                <div id="in_right" class="in_right"></div>
            </div>
        </div>
        <div class="right"></div>

    </div>
</template>

<script>
    import echarts from 'echarts'
    import SideBar from "../../components/content/SideBar/SideBar";
    import  {getHistoryCount} from '../../network/analysis'
    import  {getHistoryTotal} from '../../network/analysis_total'
    export default {
        name: "Analysis",
        components:{
            SideBar
        },
        mounted() {

            //获取报警个数和15天的每天报警次数
            this.time1 =0
            this.time2 =0
            this.time3 =0
            this.time4 =0
            this.days=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            //获取报警个数
            getHistoryCount('10001').then(res=>{
                for(let i in res){
                    //将时间中的英文去除
                    var str = res[i].sendtime;
                    //将.后的字符串删除
                    str=str.substring(0,str.indexOf("."))
                    //将时间中的T换成空格
                    var str1= str.replace('T'," ");
                    //将字符串按照空格分割
                    var arr = str1.split(" ");//以空格分开
                    var time= arr[1]
                    var strtime = arr[1]+""
                    var arr1 = strtime.split(":");//以：分割
                    //近15天报警时段统计
                    if(0<=arr1[0] && arr1[0]<6){
                        this.time1++
                    }else if(6<=arr1[0] && arr1[0]<12){
                        this.time2++
                    }else if(12<=arr1[0] && arr1[0]<18){
                        this.time3++
                    }else{
                        this.time4++
                    }
                    //近15天每天报警次数
                    var baojing = arr[0]+""
                    var arr2 = baojing.split("-");
                    this.days[arr2[1]-1]++;
                }
                this.option_regional2.series[0].data=this.days
                this.option_regional2.series[1].data=this.days
                let myChart1 = echarts.init(document.getElementById('analysis_15day'))
                myChart1.setOption(this.option_regional2);

                this.option_regional.series[0].data[0].value=this.time1
                this.option_regional.series[0].data[1].value=this.time2
                this.option_regional.series[0].data[2].value=this.time3
                this.option_regional.series[0].data[3].value=this.time4

                this.option_regional.series[1].data[0].value=this.time1
                this.option_regional.series[1].data[1].value=this.time2
                this.option_regional.series[1].data[2].value=this.time3
                this.option_regional.series[1].data[3].value=this.time4

                this.option_regional.series[4].data[0].value=this.time1
                this.option_regional.series[4].data[1].value=this.time2
                this.option_regional.series[4].data[2].value=this.time3
                this.option_regional.series[4].data[3].value=this.time4

                this.option_regional.series[3].data[0]=this.time1
                this.option_regional.series[3].data[1]=this.time2
                this.option_regional.series[3].data[2]=this.time3
                this.option_regional.series[3].data[3]=this.time4
                let myChart = echarts.init(document.getElementById('analysis'))
                myChart.setOption(this.option_regional)
            })
            //获取15天每个风场的报警占比
            getHistoryTotal().then(res=>{
                for(let i in res){
                    //报警地区占比统计
                    switch (res[i].subtype) {
                        case 10001:
                            this.option_regional3.series[0].data[0].value++
                            this.option_regional3.series[1].data[0].value++
                            break;
                        case 10002:
                            this.option_regional3.series[0].data[0].value++
                            this.option_regional3.series[1].data[1].value++
                            break;
                        case 10003:
                            this.option_regional3.series[0].data[0].value++
                            this.option_regional3.series[1].data[2].value++
                            break;
                        case 10004:
                            this.option_regional3.series[0].data[0].value++
                            this.option_regional3.series[1].data[3].value++
                            break;
                        case 20001:
                            this.option_regional3.series[0].data[1].value++
                            this.option_regional3.series[1].data[4].value++
                            break;
                        case 20002:
                            this.option_regional3.series[0].data[1].value++
                            this.option_regional3.series[1].data[5].value++
                            break;
                        case 30001:
                            this.option_regional3.series[0].data[2].value++
                            this.option_regional3.series[1].data[6].value++
                            break;
                        case 30002:
                            this.option_regional3.series[0].data[2].value++
                            this.option_regional3.series[1].data[7].value++
                            break;
                        case 40001:
                            this.option_regional3.series[0].data[3].value++
                            this.option_regional3.series[1].data[8].value++
                            break;
                        case 40002:
                            this.option_regional3.series[0].data[3].value++
                            this.option_regional3.series[1].data[9].value++
                            break;
                    }
                    //报警时段占比统计
                    //将时间中的英文去除
                    var str = res[i].sendtime;
                    //将.后的字符串删除
                    str=str.substring(0,str.indexOf("."))
                    //将时间中的T换成空格
                    var str1= str.replace('T'," ");
                    //将字符串按照空格分割
                    var arr = str1.split(" ");//以空格分开
                    var time= arr[1]
                    var strtime = time+""
                    var arr1 = strtime.split(":");//以：分割
                    if(0<=arr1[0] && arr1[0]<6){
                        this.option_regional4.series[0].data[0].value++
                    }else if(6<=arr1[0] && arr1[0]<12){
                        this.option_regional4.series[0].data[1].value++
                    }else if(12<=arr1[0] && arr1[0]<18){
                        this.option_regional4.series[0].data[2].value++
                    }else{
                        this.option_regional4.series[0].data[3].value++
                    }
                }
                let myChart2 = echarts.init(document.getElementById('in_left'))
                myChart2.setOption(this.option_regional3);
                //报警时段占比饼状图
                let myChart3 = echarts.init(document.getElementById('in_right'))
                myChart3.setOption(this.option_regional4);
            })


        },

    data() {
            return {
                //地区报警统计柱状图
                days:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                option_regional :{
                    //样式
                    backgroundColor: '#061326',
                    "grid": {
                        "top": "15%",
                        "left": "5%",
                        "bottom": "1%",
                        "right": "5%",
                        "containLabel": true,
                    },
                    //x轴坐标
                    "xAxis": [{
                        "type": "category",
                        "data": ["0.00-6.00", "6.00-12.00", "12.00-18.00", "18.00-24.00"],
                        "axisTick": {
                            "alignWithLabel": true
                        },
                        "nameTextStyle": {
                            "color": "#82b0ec"
                        },
                        "axisLine": {
                            "lineStyle": {
                                "color": "#82b0ec"
                            }
                        },
                        "axisLabel": {
                            "textStyle": {
                                "color": "#fff"
                            },
                            margin: 45
                        }
                    }],
                    //y轴信息
                    "yAxis": [{
                        "type": "value",
                        "axisLabel": {
                            "textStyle": {
                                "color": "#82b0ec"
                            },
                        },
                        "splitLine": {
                            "lineStyle": {
                                "color": "#0c2c5a"
                            }
                        },
                        "axisLine": {
                            "show": true,
                            "color": "#0c2c5a"
                        }
                    }],
                    "series": [{
                        "name": "",
                        type: 'pictorialBar',
                        symbolSize: [60, 18],
                        symbolOffset: [0, -10],
                        symbolPosition: 'end',
                        z: 12,
                        // "barWidth": "0",
                        "label": {
                            "normal": {
                                "show": true,
                                "position": "top",
                                // "formatter": "{c}%"
                                fontSize: 20,
                                color: '#34DCFF'
                            }
                        },
                        //显示y轴数据
                        "data": [{
                            "value": 0,
                            "itemStyle": {
                                "color": "#2DB1EF"
                            }
                        }, {
                            "value": 0,
                            "itemStyle": {
                                "color": "#2DB1EF"
                            }
                        }, {
                            "value": 0,
                            "itemStyle": {
                                "color": "#2DB1EF"
                            },
                        }, {
                            "value": 0,
                            "itemStyle": {
                                "color": "#2DB1EF"
                            },
                        }
                        ]
                    },
                        {
                            name: '',
                            type: 'pictorialBar',
                            symbolSize: [60, 18],
                            symbolOffset: [0, 10],
                            // "barWidth": "20",
                            z: 12,
                            "data": [{
                                "value": 0,
                                "itemStyle": {
                                    "color": "#2DB1EF"
                                }
                            }, {
                                "value": 0,
                                "itemStyle": {
                                    "color": "#2DB1EF"
                                }
                            }, {
                                "value": 0,
                                "itemStyle": {
                                    "color": "#2DB1EF"
                                }
                            }, {
                                "value": 0,
                                "itemStyle": {
                                    "color": "#2DB1EF"
                                }
                            }]
                        },
                        {
                            name: '',
                            type: 'pictorialBar',
                            symbolSize: [60, 18],
                            symbolOffset: [0, 20],
                            z: 10,
                            itemStyle: {
                                normal: {
                                    color: 'transparent',
                                    borderColor: '#2EA9E5',
                                    borderType: 'solid',
                                    borderWidth: 1
                                }
                            },
                            data: [1, 1, 1,1]
                        },
                        {
                            name: '',
                            type: 'pictorialBar',
                            symbolSize: [60, 18],
                            symbolOffset: [0, 30],
                            z: 10,
                            itemStyle: {
                                normal: {
                                    color: 'transparent',
                                    borderColor: '#19465D',
                                    borderType: 'solid',
                                    borderWidth: 2
                                }
                            },
                            data: [0, 0, 0,0]
                        },
                        {
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    //color: '#14b1eb',
                                    opacity: .9
                                }
                            },
                            //silent: true,
                            "barWidth": "60",
                            barGap: '10%', // Make series be overlap
                            barCateGoryGap: '10%',
                            "data": [{
                                "value": 0,
                                "itemStyle": {
                                    "color": "#1B6A95"
                                }
                            }, {
                                "value": 0,
                                "itemStyle": {
                                    "color": "#1B6A95"
                                }
                            }, {
                                "value": 0,
                                "itemStyle": {
                                    "color": "#1B6A95"
                                }
                            }, {
                                "value": 0,
                                "itemStyle": {
                                    "color": "#1B6A95"
                                }
                            }]

                        }


                    ]
                },
                //近15天报警柱状图
                option_regional2 : {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#283b56'
                            }
                        }
                    },
                    legend: {
                        data:['报警次数', '预测报警次数']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataView: {readOnly: false},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: true,
                            data: (function (){
                                var now = new Date();
                                var res = [];
                                var len = 15;
                                while (len--) {
                                    res.unshift(now.toDateString().replace(/^\D*/,''));
                                    now = new Date(now - 24*60*60*1000);
                                }
                                return res;
                            })()
                        },
                        {
                            type: 'category',
                            boundaryGap: true,
                            data: (function (){
                                var res = [];
                                var len = 15;
                                while (len--) {
                                    res.push(15 - len - 1);
                                }
                                return res;
                            })()
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            scale: true,
                            name: '报警次数',
                            max: 60,
                            min: 0,
                            boundaryGap: [0.8, 0.8]
                        },
                        {}
                    ],
                    series: [
                        {
                            name: '预测报警次数',
                            type: 'bar',
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            data:[]
                        },
                        {
                            name: '报警次数',
                            type: 'line',
                            data:[]
                        }
                    ]
                },
                //报警区域占比
                option_regional3:{
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 10,
                        data: ['塞罕坝', '麒麟山', '锡林浩特', '红松洼', '依兰', '昌图', '东大桥', '慈溪', '南澳', '上川岛']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: [0, '30%'],

                            label: {
                                position: 'inner'
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 0, name: '华北', selected: true},
                                {value: 0, name: '东北'},
                                {value: 0, name: '华东'},
                                {value: 0, name: '华南'}
                            ]
                        },
                        {
                            type: 'pie',
                            radius: ['40%', '55%'],
                            data: [
                                {value: 0, name: '塞罕坝'},
                                {value: 0, name: '麒麟山'},
                                {value: 0, name: '锡林浩特'},
                                {value: 0, name: '红松洼'},
                                {value: 0, name: '依兰'},
                                {value: 0, name: '昌图'},
                                {value: 0, name: '东大桥'},
                                {value: 0, name: '慈溪'},
                                {value: 0, name: '南澳'},
                                {value: 0, name: '上川岛'},
                            ]
                        }
                    ]
                },
                //报警时段占比
                option_regional4:{
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 10,
                        data: ['0.00-6.00', '6.00-12.00', '12.00-18.00', '18.00-24.00']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '15',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 0, name: '0.00-6.00'},
                                {value: 0, name: '6.00-12.00'},
                                {value: 0, name: '12.00-18.00'},
                                {value: 0, name: '18.00-24.00'}
                            ]
                        }
                    ]
                },
                //风场名字
                fengchang_name:"塞罕坝风场",
                time1:0,
                time2:0,
                time3:0,
                time4:0

            }
        },
        methods:{
            //接收SideBar传递来的风场点击参数
            changeName(params1,param2){
                this.fengchang_name = params1
                this.time1 =0
                this.time2 =0
                this.time3 =0
                this.time4 =0
                this.days=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                //获取报警个数
                getHistoryCount(param2).then(res=>{
                    for(let i in res){
                        //将时间中的英文去除
                        var str = res[i].sendtime;
                        //将.后的字符串删除
                        str=str.substring(0,str.indexOf("."))
                        //将时间中的T换成空格
                        var str1= str.replace('T'," ");
                        //将字符串按照空格分割
                        var arr = str1.split(" ");//以空格分开
                        var time= arr[1]
                        var strtime = arr[1]+""
                        var arr1 = strtime.split(":");//以：分割
                        //近15天报警时段统计
                        if(0<=arr1[0] && arr1[0]<6){
                            this.time1++
                        }else if(6<=arr1[0] && arr1[0]<12){
                            this.time2++
                        }else if(12<=arr1[0] && arr1[0]<18){
                            this.time3++
                        }else{
                            this.time4++
                        }
                        //近15天每天报警次数
                        var baojing = arr[0]+""
                        var arr2 = baojing.split("-");
                        this.days[arr2[1]-1]++;
                    }
                    this.option_regional2.series[0].data=this.days
                    this.option_regional2.series[1].data=this.days
                    let myChart1 = echarts.init(document.getElementById('analysis_15day'))
                    myChart1.setOption(this.option_regional2);

                    this.option_regional.series[0].data[0].value=this.time1
                    this.option_regional.series[0].data[1].value=this.time2
                    this.option_regional.series[0].data[2].value=this.time3
                    this.option_regional.series[0].data[3].value=this.time4

                    this.option_regional.series[1].data[0].value=this.time1
                    this.option_regional.series[1].data[1].value=this.time2
                    this.option_regional.series[1].data[2].value=this.time3
                    this.option_regional.series[1].data[3].value=this.time4

                    this.option_regional.series[4].data[0].value=this.time1
                    this.option_regional.series[4].data[1].value=this.time2
                    this.option_regional.series[4].data[2].value=this.time3
                    this.option_regional.series[4].data[3].value=this.time4

                    this.option_regional.series[3].data[0]=this.time1
                    this.option_regional.series[3].data[1]=this.time2
                    this.option_regional.series[3].data[2]=this.time3
                    this.option_regional.series[3].data[3]=this.time4
                    let myChart = echarts.init(document.getElementById('analysis'))
                    myChart.setOption(this.option_regional)
                })
            },
        }
    }
</script>

<style scoped>
    .left{
        width: 13%;
        height: 800px;
    }
    .middle{
        width: 85%;
        height: 800px;
        float: left;
        background-image: url("~assets/img/dataanalysis/analysis/bg-middle.png");
        background-size: 1500px 800px;
    }
    .right{
        width: 2%;
        height: 800px;
        float: right;
        background-color: #4d8cbc;
    }
    .title1{
        width: 99%;
        height: 1%;
        padding: 5px;

    }
    .analysis_regional{
        width: 99%;
        height: 28%;
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .title2{
        width: 99%;
        height: 1%;
        margin-top: 5px;
    }
    .analysis_15day{
        width: 99%;
        height: 25%;
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .title3{
        width: 49%;
        height: 1%;
        float: left;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .title4{
        width: 49%;
        height: 1%;
        float: right;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .in_left{
        width: 49%;
        height: 210px;
        float: left;
        margin-right: 5px;
        margin-left: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .in_right{
        width: 49%;
        height: 210px;
        float: right;
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    div{
        font-size:15px;
        color: #fff;
        font-family: "Times New Roman";
        font-weight: bold;
    }
    .left-in{ margin-left:-1px;width: 0px; height:70%; border-right:0px solid #CCCCCC ; color:#fff; font-size:18px; }

    .div3 ul{margin:0;padding:0;}

    .div3 li{ height:30px; line-height:30px; list-style:none;  margin-left: 12px;}

    .left{
        background-image: url("~assets/img/dataanalysis/analysis/fengji.png");
        background-size:auto 800px;
    }
</style>