<template>
  <div id="app">

    <!-- 左侧导航菜单 -->
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">About</router-link>|

      <router-link to = '/stu'>学生管理</router-link>
      <router-link to='/demo'>我的Demo页面</router-link>
    </div>

    <!-- 右侧显示的内容 -->
    <router-view/>


    <!-- <testwatch></testwatch> -->
  </div>
</template>

<script>

// import testwatch from '../src/components/testwatch.vue'
export default {
  components: {
// testwatch

  },
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
}
</style>
