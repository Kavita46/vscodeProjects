<!-- 我的页面 -->
<template>
  <div>
    <el-table :data.sync="classList" style="width: 100%">
      <el-table-column
        label="ID"
        prop="_id"
        style="width: 50%"
      ></el-table-column>
      <el-table-column
        label="名字"
        prop="cname"
        style="width: 50%"
      ></el-table-column>
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
      newClass: { cname: "" },
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
