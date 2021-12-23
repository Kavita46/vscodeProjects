<!-- 我的页面 -->
<template>
  <div >
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>

<el-breadcrumb-item v-for='item in $route.meta.bread' :key ='item.title' :to='{path:item.path}'>{{item.title}}</el-breadcrumb-item>
<!-- {{$route.meta}} -->
<!-- {{$route}} -->
  <!-- <el-breadcrumb-item :v-for ='(item,index) in $route.meta.bread' :key="item.title" :to='{path:item.path}'>{{item.title}}</el-breadcrumb-item> -->
</el-breadcrumb>

  </div>

</template>

<script>

export default {
  components: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {

  },
}
</script>

<style  scoped>

</style>
