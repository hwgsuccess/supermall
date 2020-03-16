<template>
  <div class="swiper">
    <el-carousel class="swiper" :height="bannerHeight+'px'">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" ref="bannerHeight" @load="imgLoad">
        </a>
      </el-carousel-item>
    </el-carousel>    
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        bannerHeight: ""
      }
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    mounted() {
      window.addEventListener('resize', () => {
        this.imgLoad();
      },false)
    },
    methods: {
      imgLoad() {
        this.$nextTick( () => {
          this.bannerHeight = this.$refs.bannerHeight[0].height
        })
      }
    }    
  }  
</script>

<style lang="less" scoped>
  .swiper{
    a{
      font-size: 0px;
      img{
        width: 100%;
      }      
    }
  }  
</style>