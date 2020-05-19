<template>
    <div class="home">
        <side-bar @fengchang="fengchang_click"></side-bar>
        <div class="allmap">
            <!--        获取vuex中的数据-->
            <baidu-map v-if="hackReset" ak="aT1KR6s8FckgxrHj4lVmUnCOQppoOqso" class="map"
                       :zoom="zoom"
                       :center="center"
                        @ready="handler">
            </baidu-map>
        </div>
    </div>
</template>

<script>
    import  {getSubtypeData} from "network/subtype_data.js";
    import BaiduMap from 'vue-baidu-map/components/map/Map'
    import SideBar from "../../components/content/SideBar/SideBar";
    export default {
        name: "Home",
        components:{
            BaiduMap,
            SideBar
        },
        data(){
            return{
                //定义不同风场对应的subtype编号
                shebei: [{
                    lat: '',
                    lng: ''
                }],
                zoom: 2,
                center:{
                    lng: 116,
                    lat: 39
                },
                hackReset:true,
            }
        },
        mounted() {
            this.shebei = this.$store.state.latlong;
        },
        methods:{
            handler({BMap, map}) {
                //设置地图风格
                var  mapStyle ={
                    features: ["road", "building","water","land"],//隐藏地图上的poi
                    style : "dark"  //设置地图风格为高端黑
                }
                map.setMapStyle(mapStyle);
                //开启鼠标滚轮缩放
                map.enableScrollWheelZoom();
                //开启鼠标双击缩放getLatData.
                map.enableDoubleClickZoom();
                //删除this.point第一个无效的点,删除起始下标为1，长度为1
                //this.point.splice(0, 1);

                //创建覆盖物
                var options = {
                    size: BMAP_POINT_SIZE_SMALL,
                    shape: BMAP_POINT_SHAPE_STAR,
                    color: '#b9d305'
                }
                var pointCollection = new BMap.PointCollection(this.shebei, options);  // 初始化PointCollection
                pointCollection.addEventListener('click', function (e) {
                   alert('单击点的坐标为：' + e.shebei.lng + ',' + e.shebei.lat);  // 监听点击事件
                });
                map.addOverlay(pointCollection);  // 添加Overlay
            },

            //根据所点击的风场改变百度地图内容
            fengchang_click(number){
                //先清空shebei
                this.shebei =[{
                    lat: '',
                    lng: ''
                }]
                let params=number
                getSubtypeData(params).then(res =>{
                    for (let i in res){
                        this.shebei.push({
                            'lat':res[i].latitude,
                            'lng':res[i].longtitude
                        })
                    }
                    //设置缩放等级和地图中心
                    this.zoom = 14;
                    this.center={
                        lng: res[1].longtitude,
                        lat: res[1].latitude
                    }
                })
                //重新渲染百度地图DOM
                this.hackReset = false
                this.$nextTick(()=>{
                    this.hackReset = true
                })
            },

            // fengchang_click(number){
            //     //先清空shebei
            //
            //
            //     // this.shebei =[{
            //     //     lat: '',
            //     //     lng: ''
            //     // }]
            //     this.$store.dispatch("getSubTypeData",number);
            //     setTimeout(()=>{  console.log(this.$store.state.shebei); }, 3000);
            //
            //         // //设置缩放等级和地图中心
            //         this.zoom = 14;
            //         this.center={
            //             lng: this.$store.state.shebei[1].lat,
            //             lat: this.$store.state.shebei[1].lng
            //         }
            //
            //     //重新渲染百度地图DOM
            //     this.hackReset = false
            //     this.$nextTick(()=>{
            //         this.hackReset = true
            //     })
            // }
        }
    }
</script>

<style scoped>
    .home{
        height: 1000px;
        background: #1b7aee;
    }

    .map{
        width: 83%;
        height: 1000px;
        float: right;
    }
</style>