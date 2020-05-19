<template>
    <div class="main-tab-bar">
        <tab-bar>
            <!--            跳转到首页概览-->
            <tab-bar-item path="/home" messageColor="">
                <img slot="item_icon" src="~assets/img/home/home_tabcontrol/home.png" alt="">
                <div slot="item_message">概况</div>
            </tab-bar-item>

<!--            跳转到数据分析-->
            <tab-bar-item path="/dataanalysis" messageColor="">
                <img slot="item_icon" src="~assets/img/home/home_tabcontrol/anaisy.png" alt="">
                <div slot="item_message">数据分析</div>
            </tab-bar-item>

            <!--            跳转到实时监测-->
            <tab-bar-item path="/monitoring" messageColor="">
                <img slot="item_icon" src="~assets/img/home/home_tabcontrol/monitoring.png" alt="">
                <div slot="item_message">实时监测</div>
            </tab-bar-item>

            <!--            跳转到节点管理-->
            <tab-bar-item path="/node" messageColor="">
                <img slot="item_icon" src="~assets/img/home/home_tabcontrol/node.png" alt="">
                <div slot="item_message">节点管理</div>
            </tab-bar-item>

            <!--            跳转到设置-->
            <tab-bar-item path="/settings" messageColor="">
                <img slot="item_icon" src="~assets/img/home/home_tabcontrol/setting.png" alt="">
                <div slot="item_message">设置</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "./TabBar";
    import TabBarItem from "./TabBarItem";
    export default {
        name: "MainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>