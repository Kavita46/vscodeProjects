<!-- 我的页面 -->
<template>
  <div>
    <!-- {{scoreList}} -->
    <el-table :data="academyList" border style="width: 100%">
      <el-table-column prop="aname" label="学院名称" width="180">
      </el-table-column>
      <el-table-column prop="mCount" label="专业数" width="180">
      </el-table-column>
      <el-table-column prop="acount" label="学院人数"> </el-table-column>

         <el-table-column label="操作">
          <!-- XXX 如果要获得点击按钮的那一栏的值,一定要加template -->
          <template slot-scope="scope">
            <el-button
            type="primary"
              v-privilege="'编辑'"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              >修改</el-button
            >
            <el-button
            type="danger"
              v-privilege="'老师'"
              size="mini"
              @click="handleScores(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      academyList: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 2-获得班级列表
    async getAcademys() {
      try {
        let res = await this.api.academy.getAcademys();
        console.log(res);
        this.academyList = res.result;
      } catch (e) {
        alert("获取学院列表异常");
      }
    },
  },

  async created() {
    await this.getAcademys();
  },

  mounted() {},
};
</script>

<style  scoped>
</style>
