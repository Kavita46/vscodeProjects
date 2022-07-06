<!-- 我的页面 -->
<template>
  <div>
    <router-view> </router-view>
    
  </div>
</template>
<script>
import Aside from "../src/views/Aside.vue";
export default {
  components: { Aside },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style  scoped>
* {
  padding: 0;
  margin: 0;
}

.container {
  height: 100vh;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
