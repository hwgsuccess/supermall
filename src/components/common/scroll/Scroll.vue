<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      pullingUp: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,//允许滚动内容内的点击事件有效
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      // 2.监听滚动的位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          // console.log(position);
          this.$emit('customScroll', position)
        })
      }

      // 3.上拉加载更多
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }

    },
    methods: {
      handleScrollTo(x, y, time=300){
        this.scroll && this.scroll.scrollTo(x, y, time)
      }
    }
  }
</script>

<style lang="less" scoped>
  
</style>