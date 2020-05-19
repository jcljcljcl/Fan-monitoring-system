<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tab-bar{
    display:flex;
    background-color: #1b71bc;
    color: #fff;

    position: relative;
    left: 0;
    right: 0;
    top: 0;
  }
</style>
