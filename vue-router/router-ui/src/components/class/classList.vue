<!-- 我的页面 -->
<template>
  <div>
    <el-table :data.sync="classList" style="width: 100%">
      <el-table-column
        label="专业"
        prop="major"
        style="width: 50%"
      ></el-table-column>
      <el-table-column
        label="班级名"
        prop="cname"
        style="width: 50%"
      ></el-table-column>
      <el-table-column
        label="人数"
        prop="count"
        style="width: 50%"
      ></el-table-column>
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
    <br />
    <h3>添加班级</h3>
    <el-input
      style="width: 40%"
      placeholder="输入班级名"
      v-model="newClass.cname"
    ></el-input>
    <el-button @click="open">添加</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      classList: [],
      newClass: { cname: "", cid: -1, count: 0 },
    };
  },
  computed: {},
  watch: {
    classList: {
      handler(newVal, oldVal) {
        this.classList = newVal;
      },
      deep: true,
    },
  },
  methods: {
    open() {
      this.$confirm("确定添加班级吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.newClass.cid = this.classList.length + 1;
          console.log(this.newClass.cid);
          this.addClass(this.newClass);
          this.$message({
            type: "success",
            message: "添加成功!",
          });
          this.getClasses();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消添加",
          });
        });
    },

    async addClass(data) {
      let res = await this.api.classes.addClass(data);
      console.log(res);
    },

    async getClasses() {
      try {
        let res = await this.api.classes.getClasses();
        this.classList = res.result;
      } catch (e) {
        alert("class服务器异常");
      }
    },
  },

  created() {
    this.getClasses();
  },
};
</script>

<style  scoped>
</style>
