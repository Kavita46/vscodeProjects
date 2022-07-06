<!-- 我的页面 -->
<template>
  <div>
    <el-container class="container">
      <el-header>
        <!-- <span style = 'margin-left:-300px'>欢迎您 xxx 用户</span> -->
        <template>
          <div>
            <span style="position: absolute; top: 0; left: 200px; color:red"
              >欢迎{{ user.username }}用户, 身份为老师</span
            >

            <!-- <span> vuex的数据{{ user }}</span> -->
            <!-- <span style="color: blue">学生管理系统</span> -->
          </div>
        </template>
      </el-header>
      <el-container>
        <el-aside width="150px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <h1>学生成绩管理系统(教师端)</h1>
           <v-html> 作者:李隆瀹 学号:2021220095 </v-html>
  
          <el-button @click="quit">注销</el-button>
          <BreadCrumb></BreadCrumb>
          <br />
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("user");

import Aside from "../views/Aside.vue";
import BreadCrumb from "../views/BreadCrumb.vue";
import myChart from "../views/myChart.vue";
export default {
  components: {
    Aside,
    BreadCrumb,
    myChart,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  watch: {},
  methods: {
    quit() {
      localStorage.removeItem("token");
      this.$message.success("注销成功");
      this.$router.push("/user/login");
    },
  },
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
  /* line-height: 160px; */
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

