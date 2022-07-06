<!-- 我的页面 -->
<template>
  <div>
    <!-- {{scoreList}} -->
    <el-table :data="examList" border style="width: 100%">
      <el-table-column prop="cname" label="课程名" width="180">
      </el-table-column>
      <el-table-column prop="tname" label="教师" width="100"> </el-table-column>
      <el-table-column prop="time" label="时间" width="100"> </el-table-column>
      <el-table-column prop="site" label="地点"> </el-table-column>

      <el-table-column prop="isOpen" label="性质"> </el-table-column>

      <el-table-column prop="isAgree" label="状态">
        <template slot-scope="scope">
          <span style="color: red" v-if="scope.row.flag == 0">未审核</span>
          <span style="color: blue" v-if="scope.row.flag == 1">已通过</span>
          <span style="color: gray" v-if="scope.row.flag == 2">未通过</span>
        </template>
      </el-table-column>

      <el-table-column label="审核">
        <!-- XXX 如果要获得点击按钮的那一栏的值,一定要加template -->
        <template slot-scope="scope">
          <el-button
            type="primary"
            v-if="scope.row.flag == 0"
            size="mini"
            @click="handlePass(scope.row._id)"
            >通过</el-button
          >
          <el-button
            type="danger"
            v-if="scope.row.flag == 0"
            size="mini"
            @click="handleCancel(scope.row._id)"
            >取消</el-button
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
      examList: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 2-获得班级列表
    async getExams() {
      try {
        let res = await this.api.exam.getExams();
        if (res) {
          this.examList = res.result;
        }
      } catch (e) {
        alert("获取考试列表异常");
      }
    },

    async censorExam(data) {
      try {
        let res = await this.api.exam.censorExam(data);
        if (res) {
          this.getExams();
        }
      } catch (e) {
        this.$message.error("审核失败,请联系技术人员");
      }
    },

    handlePass(_id) {
      this.$confirm("是否确定通过审核?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.censorExam({ _id: _id, flag: 1 });
          this.$message({
            type: "success",
            message: "已通过审核",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
          });
        });
    },

    handleCancel(_id) {
      this.$confirm("是否确认不通过审核?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.censorExam({ _id: _id, flag: 2 });
          this.$message({
            type: "warning",
            message: "未通过审核",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
          });
        });
    },
  },

  async created() {
    await this.getExams();
  },

  mounted() {},
};
</script>

<style scoped></style>
