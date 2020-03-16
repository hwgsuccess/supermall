<template>
	<div class="home">
		<nav-bar class="nar-bar"><div slot="center">购物街</div></nav-bar>
    <Scroll class="scroll"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @customScroll="scroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>      
    </Scroll> 

    <!-- 监听组件的原生事件必须使用.native修饰符 -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>   
	</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  // getHomeMultidata必须与home.js中被导出的方法名一致
  import {getHomeMultidata,getHomeGoods} from 'network/home'

  export default {
    name: 'Home',
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data() {
      return {
        currType: 'pop',
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        isShowBackTop: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currType].list
      }
    },
    created() {
      // 请求多个数据
      this.getHomeMultidata();

      // 请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      /*
       *事件监听相关方法 
      */
      tabClick(index) {
        switch(index) {
          case 0:
            this.currType = 'pop'
          break
          case 1:
            this.currType = 'new'
          break
          case 2:
            this.currType = 'sell'
          break
        }
      },
      backTopClick() {
        this.$refs.scroll.handleScrollTo(0, 0)
      },
      scroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      },
      loadMore() {
        this.getHomeGoods(this.currType)
      },

      /*
       *网络请求相关方法 
      */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          console.log(res)
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })        
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .home{
    position: relative;
    // tips：滚动内容需设置固定的高度，vh视口高度
    height: 100vh;
  }
	.nar-bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    color: #fff;
    background-color: var(--color-tint)
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }  
  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>