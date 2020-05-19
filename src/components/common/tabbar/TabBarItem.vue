<template>
  <div class="tab-bar-item" @click="isActiveChange">
    <div>
      <slot name="item_icon"></slot>
    </div>
<!--    当处于活跃状态时候，文字也改变-->
    <div :style="activityMessageColor">
      <slot name="item_message"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      //哪个按钮被点击后传过来对应界面的路径，如帮助被点击，传过来/help
      props:{
        path:String,
        // /*将下面文字的颜色暴露出去, messageColor="blue"*/
        messageColor:{
          type:String,
          default:'red'
        }
      },
      data(){
          return{
            // isActive:false
          }
      },
      computed:{
        activityMessageColor(){
            return this.isActive ? {color:this.messageColor}:{}
        }
      },
      methods:{
        isActiveChange(){
          //按照路由跳转
          //if语句用来防止双击报错
          // console.log(this.path);
          if(this.$route.fullPath != this.path){
            this.$router.push(this.path)
          }
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 15px;
    margin-top: 15px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    /*去掉img下面的3个像素*/
    /*vertical-align: middle;*/
  }


</style>
