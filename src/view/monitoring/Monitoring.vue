<template>
    <div class="monitor">

        <side-bar @monitoring="monitoring"></side-bar>

       <div class="left">
           <div class="top">
               <h2 class="title">{{fengchang_name}}-总览模式</h2>
               <hr/>
               <div class="shebei">
                   <ul class="list">
                       <li v-for="i in this.showShebei">
                           <div class="num">No.000{{i.id}}</div>
                           <div class="mic">
                               <img :src="i.img" alt="">
                           </div>
                           <div class="static">
                               <span>{{i.status}}</span>
                               <br/>
                               <span>{{i.year}}</span>
                               <br/>
                               <span>{{i.time}}</span>
                           </div>
                       </li>
                   </ul>
               </div>
               <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
               <div class="fanye">
                   <span @click="pageup">
                        <img :src="back" alt="">
                   上一页
                   </span>
                  <span @click="pagedown">
                       &nbsp;下一页
                   <img :src="forward" alt="">
                  </span>
               </div>
           </div>

           <div class="middle">
               <div class="middle-left">
                   <h2 class="title">实时特征</h2>
                   <hr/>
                   <h5 class="history">{{fengchang_name}}-声暴露级和频谱重心</h5>
                   <div id="feature" class="feature">
                       这是一个折线图
                   </div>
               </div>
               <div class="middle-right">
                   <h2 class="title">视频显示</h2>
                   <hr/>
                   <div class="player">
                       <video-player  class="video-player vjs-custom-skin"
                                      ref="videoPlayer"
                                      :playsinline="true"
                                      :options="playerOptions"
                       ></video-player>
                   </div>
               </div>
           </div>

           <div class="bottom">
               <h2 class="title">报警信息记录</h2>
               <hr/>
               <div class="block">
                   <vxe-select v-model="error_type" placeholder="请选择故障类型" :options="error_type_option"></vxe-select>
                   <vxe-button @click="change">切换</vxe-button>
                   <vxe-table
                           border
                           show-overflow
                           height="230"
                           :loading="loading"
                           :data="tableData">
                       <vxe-table-column type="checkbox" width="60"></vxe-table-column>
                       <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
                       <vxe-table-column field="sheibei" title="设备类型"></vxe-table-column>
                       <vxe-table-column field="sendtime" title="报警时间" sortable></vxe-table-column>
                       <vxe-table-column field="status" title="故障类型" sortable></vxe-table-column>
                       <vxe-table-column field="longtitude" title="报警设备经度"></vxe-table-column>
                       <vxe-table-column field="latitude" title="报警设备纬度"></vxe-table-column>
                   </vxe-table>
                   <vxe-pager
                           :loading="loading"
                           :current-page="tablePage.currentPage"
                           :page-size="tablePage.pageSize"
                           :total="tablePage.totalResult"
                           :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                           @page-change="handlePageChange">
                   </vxe-pager>
               </div>
           </div>
       </div>
        <div class="right"></div>
    </div>
</template>

<script>
    import SideBar from "../../components/content/SideBar/SideBar";
    import  normal from  '../../assets/img/monitoring/mic1.png'
    import  virtual from  '../../assets/img/monitoring/mic3.png'
    import  error from  '../../assets/img/monitoring/mic2.png'
    import  forward_disabled from  '../../assets/img/monitoring/forward_disabled.png'
    import  forward_enabled from  '../../assets/img/monitoring/forward_enabled.png'
    import  back_disabled from  '../../assets/img/monitoring/back_disabled.png'
    import  back_enabled from  '../../assets/img/monitoring/back_enabled.png'

    //获取realtime数据表中的数据
    import  {getSubtypeData} from "network/subtype_data.js";
    //获取history中的数据
    import  {getHistoryData} from "network/history_data.js";
    //获取history中的故障数据
    import  {getHistoryError} from "network/history_error.js";
    import echarts from "echarts";
    //下方表格
    import Vue from 'vue'
    import 'xe-utils'
    import VXETable from 'vxe-table'

    import 'vxe-table/lib/index.css'
    Vue.use(VXETable)
    export default {
        name: "Monitoring",
        data(){
            return {
                fengchang_name:'塞罕坝',
                shebei:[],
                shebei1:[],
                shebei2:[],
                showShebei:[],
                history:[],
                colCount : 9,//每行展示状态个数
                page :1,//当前展示的页数
                // fengchang_select:'',
                forward:forward_enabled,
                back:back_disabled,
                //故障数据
                error_data:[],
                //虚警数据
                virtual_data:[],
                //要在表格中显示的数据
                show_error_data:[],
                //故障类型
                error_type:'1',
                error_type_option:[
                    { label: '裂纹故障', value: '1' },
                    { label: '虚警故障', value: '2' }
                ],
                //实时特征
                option :{
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['最大特征值', '最小特征值']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1', '2', '3', '4', '5', '6', '7']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    series: [
                        {
                            name: '频谱重心',
                            type: 'line',
                            data: [],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        },
                        {
                            name: '声暴露级',
                            type: 'line',
                            data: [],
                            markPoint: {
                                data: [
                                    {name: '最低', value: -2, xAxis: 1, yAxis: -1.5}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'},
                                    [{
                                        symbol: 'none',
                                        x: '90%',
                                        yAxis: 'max'
                                    }, {
                                        symbol: 'circle',
                                        label: {
                                            position: 'start',
                                            formatter: '最大值'
                                        },
                                        type: 'max',
                                        name: '最高点'
                                    }]
                                ]
                            }
                        }
                    ]
                },
                //播放器设置
                playerOptions : {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '11:5', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                        src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //测试mp4地址
                        //src:"116.213.200.53/tslsChannelLive/PCG0DuD/liveCCTV"//测试地址
                        //src: "rtmp://localhost/live/livestream", // <—手机 APP rtmp直播地址
                    }],
                    poster: "../../static/images/test.jpg", //你的封面地址
                    // width: document.documentElement.clientWidth, //播放器宽度
                    height:document.documentElement.clientHeight,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  //全屏按钮
                    }
                },
                //最下方表格
                loading: false,
                tableData: [],
                tablePage: {
                    currentPage: 1,
                    pageSize: 10,
                    totalResult: 0
                }

        }
        },
        components:{
            SideBar
        },
        created() {
            //默认显示塞罕坝风场数据
            getSubtypeData('10001').then(res=>{
                this.shebei=res
                for(let i in this.shebei){
                    //将状态转换成中文
                    if(this.shebei[i].status === 0){
                        this.shebei[i].img = normal
                        this.shebei[i].status = '正常'
                    }else if(i.status === 1){
                        this.shebei[i].img = virtual
                        this.shebei[i].status = '虚警'
                    }else{
                        this.shebei[i].img = error
                        this.shebei[i].status = '故障'
                    }
                    //将时间中的英文去除
                    var str =  this.shebei[i].sendtime;
                    //将.后的字符串删除
                    str=str.substring(0,str.indexOf("."))
                    //将时间中的T换成空格
                    this.shebei[i].sendtime = str.replace('T'," ");
                    //将字符串按照空格分割
                    var str1 =this.shebei[i].sendtime
                    var arr = str1.split(" ");//以空格分开
                    this.shebei[i].year = arr[0]
                    this.shebei[i].time= arr[1]
                }
                //分页显示
                this.showShebei=this.shebei
                if(this.shebei.length > this.colCount){
                    var str = this.shebei
                    this.shebei1=str.slice(0, this.colCount)
                    this.shebei2=str.slice(this.colCount, this.shebei.length)
                }
                //切换风场后默认显示第一页
                this.showShebei= this.shebei1
            })

           //下方表格默认显示塞罕坝数据
            this.getHistoryDefault('10001')
        },
        mounted() {
            //请求history中的特征数据
            getHistoryData('10001').then(res=>{
                this.option.series[0].data=[]
                this.option.series[1].data=[]
                for(let item in res){
                    this.option.series[0].data.push(res[item].feature2)
                    this.option.series[1].data.push(res[item].feature1)
                }
                let myChart = echarts.init(document.getElementById('feature'))
                myChart.setOption(this.option);
            })
        },
        methods:{
            monitoring(params1,params2){
                this.fengchang_name=params2
                //根据id从数据库中取出对应数据,并对数据处理
                this.getData(params1);
                //默认返回按钮是灰色
                this.back = back_disabled
                //前进按钮是有色
                this.forward = forward_enabled
                //显示历史信息中的特征
                this.getHistory(params1)
                //显示故障或者虚警数据
                this.getHistoryDefault(params1)
            },
            //翻到上一页
            pageup(){
                this.showShebei= this.shebei1
                this.back = back_disabled
                this.forward = forward_enabled
            },
            //翻到下一页
            pagedown(){
                this.showShebei= this.shebei2
                this.forward = forward_disabled
                this.back = back_enabled
            },

            change(){
                if(this.error_type === '1'){
                    this.show_error_data=[]
                    this.show_error_data= this.error_data
                }else if(this.error_type ==='2'){
                    this.show_error_data=[]
                    this.show_error_data=this.virtual_data
                }
                this.tablePage.totalResult =this.show_error_data.length
                this.tableData =this.show_error_data.splice(0,this.tablePage.pageSize)
            },
            //底部表格翻页
            handlePageChange ({ currentPage, pageSize }) {
                this.tablePage.currentPage = currentPage
                this.tablePage.pageSize = pageSize
                this.tableData.splice(0);
                this.tableData =this.show_error_data.slice((currentPage-1)*this.tablePage.pageSize,currentPage*this.tablePage.pageSize)
            },
            getData(params){
                getSubtypeData(params).then(res=>{
                    this.shebei=res
                    for(let i in this.shebei){
                        //将状态转换成中文,并按照状态显示不同的图片
                        if(this.shebei[i].status === 0){
                            this.shebei[i].img = normal
                            this.shebei[i].status = '正常'
                        }else if(i.status === 1){
                            this.shebei[i].img = virtual
                            this.shebei[i].status = '虚警'
                        }else{
                            this.shebei[i].img = error
                            this.shebei[i].status = '故障'
                        }
                        var str =  this.shebei[i].sendtime;
                        //将时间中.后的字符串删除
                        var str1=str.substring(0,str.indexOf("."))
                        //将时间中的T换成空格
                        this.shebei[i].sendtime = str1.replace('T'," ");
                        //将字符串按照空格分割
                        var str2 =this.shebei[i].sendtime
                        var arr = str2.split(" ");//以空格分开
                        this.shebei[i].year = arr[0]
                        this.shebei[i].time= arr[1]
                    }
                    //将数据分页显示
                    if(this.shebei.length > this.colCount){
                        var str3 = this.shebei
                        this.shebei1=str3.slice(0, this.colCount)
                        this.shebei2=str3.slice(this.colCount, this.shebei.length)
                    }
                    //切换风场后默认显示第一页
                    this.showShebei= this.shebei1
                })
            },
            //在历史信息中筛选特征并显示
            getHistory(params){
                //请求history中的特征数据
                this.option.series[0].data=[]
                this.option.series[1].data=[]
                getHistoryData(params).then(res=>{
                    if(res.length === 0){
                        this.option.series[0].data=[0,0,0,0,0,0,0]
                        this.option.series[1].data=[0,0,0,0,0,0,0]
                    }else{
                        for(let item in res){
                            this.option.series[0].data.push(res[item].feature2)
                            this.option.series[1].data.push(res[item].feature1)
                        }
                    }
                    let myChart = echarts.init(document.getElementById('feature'))
                    myChart.setOption(this.option);
                })
            },

            //在历史信息中按照subtype筛选flag且status为2的故障数据，flag为2且status为0的虚警数据并显示
            getHistoryDefault(params){
                this.tableData.splice(0);
                this.error_data=[];
                this.virtual_data=[];
                getHistoryError(params).then(res=>{
                    // console.log(res);
                    for (let i in res){
                        res[i].sheibei =this.fengchang_name
                        //将res中的status转换成故障类型，2转为裂纹故障，其他转为虚警故障
                        if(res[i].status === 2){
                            res[i].status = '裂纹故障'
                            this.error_data.push(res[i])
                        }else{
                            res[i].status = '虚警故障'
                            this.virtual_data.push(res[i])
                        }
                        var str =  res[i].sendtime;
                        //将时间中.后的字符串删除
                        var str1=str.substring(0,str.indexOf("."))
                        //将时间中的T换成空格
                        res[i].sendtime = str1.replace('T'," ");
                    }
                    if(this.error_type === '1'){
                        this.show_error_data=[]
                        this.show_error_data= this.error_data
                    }else if(this.error_type ==='2'){
                        this.show_error_data=[]
                        this.show_error_data=this.virtual_data
                    }
                    //填充表格数据
                    this.tablePage.totalResult =this.show_error_data.length
                    this.tableData =this.show_error_data.splice(0,this.tablePage.pageSize)

                })
            }
        }
    }
</script>

<style scoped>
    .monitor{
         height: 1000px;
         background: #1b7aee;
     }
    .left{
        background: #1b7aee;
        width: 81%;
        height: 800px;
        margin-left: 15px;
    }
    .right{
        width: 1%;
        height: 800px;
        background: #1b7aee;
    }
    .top{
        width: 100%;
        height: 37%;
        background: #fff;
        margin: 2px;
        margin-top: 5px;
        border-radius: 5px;
    }
    .title{
        font-size: 18px;
        font-family: 楷体;
        color: #1b7aee;
        background-color: rgba(3, 119, 191, 0.29);
        line-height: 25px;
    }
    .mic img{
        width: 100px;
        height: 100px;
    }
    .list{
        list-style-type: none;
        text-align: center;
    }
    .list li{
        float: left;
        margin-left: 20px;
    }
    .num{
        background: #72b7bc;
        border-radius: 5px;
        line-height: 20px;
        padding: 5px;
        font-family: "Times New Roman";
        font-weight: bold;
        color: #000e76;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .static{
        background: #eeebd5;
        border-radius: 5px;
        line-height: 20px;
        padding: 5px;
        margin-top: 10px;
        color: #5cb85c;
        font-weight: bold;
    }

    .shebei{
        float: top;
    }
    .fanye{
        float: bottom;
        font-size: 14px;
        text-align: right;
        margin-right: 10px;
        margin-top: 8px;
    }



    .middle{
        margin-top: 15px;
        height: 36%;
        width: 100%;
    }
    .middle-left{
        height: 100%;
        width: 49.5%;
        float: left;
        background: #fff;
        border-radius: 5px;
    }

    .feature{
        width: 100%;
        height: 80%;
    }
    .history{
        color: #4d8cbc;
        padding: 5px;
    }
    .middle-right{
        height: 100%;
        width: 49.5%;
        float: right;
        background: #fff;
        border-radius: 5px;
    }

    .player{
        width: 99%;
        height: 100%;
        text-align: center;
        margin-top: 2px;
        margin-left: 2px;
        margin-right: 2px;
    }
    .bottom{
        width: 100%;
        height: 42%;
        background: #fff;

        margin-top: 15px;
        border-radius: 5px;
        position: relative;
        z-index: 9;
    }
    #customers td, #customers th
    {
        font-size:1em;
        border:1px solid #bfa9aa;
        padding:3px 7px 2px 7px;
        line-height: 25px;
    }
    #customers th
    {
        font-size:1em;
        text-align:center;
        padding-top:5px;
        padding-bottom:4px;
        background-color: #928988;
        color:#ffffff;
    }
</style>