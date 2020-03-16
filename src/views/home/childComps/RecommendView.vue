<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        // default必须是一个函数
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .recommend{
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
    .recommend-item{
      flex: 1;
      text-align: center;
      font-size: 0;
      img{
        margin-bottom: 10px;
        width: 68px;
        height: 68px;
      }
      p{
        font-size: 12px;
      }
    }
  }
</style>