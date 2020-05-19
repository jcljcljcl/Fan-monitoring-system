<template>
  <div id="app">
<!--        显示标题-->
      <plant-title></plant-title>
      <!--        切换导航栏-->
      <main-tab-bar></main-tab-bar>
<!--      显示底部-->
      <plant-bottom class="bottom"></plant-bottom>
      <!--    显示路由界面-->
      <router-view></router-view>
  </div>
</template>

<script>
    import PlantTitle from "./components/content/title/PlantTitle";
    import MainTabBar from "./components/common/tabbar/MainTabBar";
    import PlantBottom from "./components/content/bottom/PlantBottom";
  export default {
    name: 'App',
    components: {
        MainTabBar,
        PlantTitle,
        PlantBottom
    }
  }
</script>

<style>
  @import "assets/css/base.css";
    .bottom{
        position: relative;
        z-index: 99999;
    }
</style>
