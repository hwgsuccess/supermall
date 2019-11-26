<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view/>
  </div>
</template>
      
<script>
  import MainTabBar from './components/content/mainTabBar/MainTabBar'
  
  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import 'assets/css/base.css'
</style>
<style lang="less">

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
