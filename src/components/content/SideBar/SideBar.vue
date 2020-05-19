<template>
    <div class="side">
        <div class="left">
            <div class="div1">
                <div class="div2">华北地区</div>
                <div class="div3">
                    <ul>
                        <li @click="saihanba"> 围场塞罕坝风场</li>
                        <li @click="qilinshan"> 尚义麒麟山风场</li>
                        <li @click="xilinhaote"> 内蒙古锡林浩特风场</li>
                        <li @click="hongsongwa"> 承德红松洼风场</li>
                    </ul>
                </div>
                <div class="div2">东北地区</div>
                <div class="div3">
                    <ul>
                        <li @click="yilan"> 黑龙江依兰风场</li>
                        <li @click="changtu"> 辽宁昌图风场</li>
                    </ul>
                </div>
                <div class="div2">华东地区</div>
                <div class="div3">
                    <ul>
                        <li @click="dongdaqiao">上海东大桥风场</li>
                        <li @click="cixi"> 浙江慈溪风场</li>
                    </ul>
                </div>
                <div class="div2"> 华南地区</div>
                <div class="div3">
                    <ul>
                        <li @click="nanao"> 广东南澳风场</li>
                        <li @click="shangchuandao"> 广东上川岛风场</li>
                    </ul>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import $ from "jquery";

    export default {
        name: "SideBar",
        mounted() {
            $(document).ready(function(){
                $(".div2").click(function(){

                    $(this).next("div").slideToggle("slow")
                        .siblings(".div3:visible").slideUp("slow");
                });
            });
        },
        methods:{
            //塞罕坝风场 10001
            saihanba(){
                //根据不同活跃的路由，将点击事件传递给不同组件
                //向home组件传递10001
                if( this.$route.path === '/home'){
                    this.$emit('fengchang',"10001")
                }
                //向analysis组件传递10001
                if( this.$route.path === '/analysis'){
                    this.$emit('analysis',"塞罕坝","10001")
                }
                //向monitoring组件传递10001
                if( this.$route.path === '/monitoring'){
                    this.$emit('monitoring',"10001","塞罕坝")
                }
                //向node组件传递10001
                if( this.$route.path === '/node'){
                    this.$emit('node',"10001","塞罕坝")
                }
            },
            //麒麟山风场 10002
            qilinshan(){
                if( this.$route.path === '/home'){
                    this.$emit('fengchang',"10002")
                }
                if( this.$route.path === '/analysis'){
                    this.$emit('analysis',"麒麟山","10002")
                }
                if( this.$route.path === '/monitoring'){
                    this.$emit('monitoring',"10002","麒麟山")
                }
                if( this.$route.path === '/node'){
                    this.$emit('node',"10002","麒麟山")
                }
            },
            //锡林浩特风场 10003
            xilinhaote(){
                if( this.$route.path === '/home'){
                    this.$emit('fengchang',"10003")
                }
                if( this.$route.path === '/analysis'){
                    this.$emit('analysis',"锡林浩特","10003")
                }
                if( this.$route.path === '/monitoring'){
                    this.$emit('monitoring',"10003","锡林浩特")
                }
                if( this.$route.path === '/node'){
                    this.$emit('node',"10003","锡林浩特")
                }
            },
            //红松洼风场  10004
            hongsongwa(){
                if( this.$route.path === '/home'){
                    this.$emit('fengchang',"10004")
                }
                if( this.$route.path === '/analysis'){
                    this.$emit('analysis',"红松洼","10004")
                }
                if( this.$route.path === '/monitoring'){
                    this.$emit('monitoring',"10004","红松洼")
                }
                if( this.$route.path === '/node'){
                    this.$emit('node',"10003","锡林浩特")
                }
            },
            //依兰风场 20001
            yilan(){
                if( this.$route.path === '/home'){
                    this.$emit('fengchang',"20001")
                }
                if( this.$route.path === '/analysis'){
                    this.$emit('analysis',"依兰","20001")
                }
                if( this.$route.path === '/monitoring'){
                    this.$emit('monitoring',"20001","依兰")
                }
                if( this.$route.path === '/node'){
                    this.$emit('node',"20001","依兰")
                }
            },
            //昌图风场 20002
            changtu(){
                if( this.$route.path === '/home'){
                    this.$emit('fengchang',"20002")
                }
                if( this.$route.path === '/analysis'){
                    this.$emit('analysis',"昌图","20002")
                }
                if( this.$route.path === '/monitoring'){
                    this.$emit('monitoring',"20002","昌图")
                }
                if( this.$route.path === '/node'){
                    this.$emit('node',"20002","昌图")
                }
            },
            //东大桥风场  30001
            dongdaqiao(){
                if( this.$route.path === '/home'){
                    this.$emit('fengchang',"30001")
                }
                if( this.$route.path === '/analysis'){
                    this.$emit('analysis',"东大桥","30001")
                }
                if( this.$route.path === '/monitoring'){
                    this.$emit('monitoring',"30001","东大桥")
                }
                if( this.$route.path === '/node'){
                    this.$emit('node',"30001","东大桥")
                }
            },
            //慈溪风场  30002
            cixi(){
                if( this.$route.path === '/home'){
                    this.$emit('fengchang',"30002")
                }
                if( this.$route.path === '/analysis'){
                    this.$emit('analysis',"慈溪","30002")
                }
                if( this.$route.path === '/monitoring'){
                    this.$emit('monitoring',"30002","慈溪")
                }
                if( this.$route.path === '/node'){
                    this.$emit('node',"30002","慈溪")
                }
            },
            //南澳风场 40001
            nanao(){
                if( this.$route.path === '/home'){
                    this.$emit('fengchang',"40001")
                }
                if( this.$route.path === '/analysis'){
                    this.$emit('analysis',"南澳","40001")
                }
                if( this.$route.path === '/monitoring'){
                    this.$emit('monitoring',"40001","南澳")
                }
                if( this.$route.path === '/node'){
                    this.$emit('node',"40001","南澳")
                }
            },
            //上川岛风场 40002
            shangchuandao(){
                if( this.$route.path === '/home'){
                    this.$emit('fengchang',"40002")
                }
                if( this.$route.path === '/analysis'){
                    this.$emit('analysis',"上川岛","40002")
                }
                if( this.$route.path === '/monitoring'){
                    this.$emit('monitoring',"40002","上川岛")
                }
                if( this.$route.path === '/node'){
                    this.$emit('node',"40002","上川岛")
                }
            }
        }
    }
</script>

<style scoped>
    .side{
        margin-left: 10px;
        background: #fff;
        height: 1000px;
        width: 15%;
        position: relative;
        z-index: 9;
        float: left;
    }
    body{ margin:0;font-family:微软雅黑;}

    .left{ width:0px; height:100%; border-right:1px solid #CCCCCC ; color:#000000; font-size:14px; }

    .div1{margin-left: 5px; width:150px; padding-top:10px;}

    .div2{height:40px; line-height:40px;cursor: pointer; font-size:13px; position:relative;border-bottom:#ccc 2px dotted;}

    .div3{display: none;cursor:pointer; font-size:13px;}

    .div3 ul{margin:0;padding:0;}

    .div3 li{ height:30px; line-height:30px; list-style:none; border-bottom:#ccc 1px dotted; margin-left: 12px;}

</style>