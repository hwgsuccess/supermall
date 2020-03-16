<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style lang="less" scoped>
  .backtop{
    position: fixed;
    right: 10px;
    bottom: 70px;
    img{
      width: 45px;
      height: 45px;
    }
  }
</style>