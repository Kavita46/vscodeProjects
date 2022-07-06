<!-- 我的页面 -->
<template>
  <div>
    <!-- {{scoreList}} -->
    <el-table :data="courseList" border style="width: 100%">
      <el-table-column prop="cname" label="课程名称" width="180">
      </el-table-column>
      <el-table-column prop="tname" label="教师" width="180"> </el-table-column>
      <el-table-column prop="type" label="类型"> </el-table-column>
      <el-table-column prop="aname" label="开课学院"> </el-table-column>

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
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改信息的弹窗 -->
    <el-dialog title="修改课程" :visible.sync="dialogVisible">
      <el-form :model="form">
        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="form.cname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="教师" :label-width="formLabelWidth">
          <el-input v-model="form.tname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-input v-model="form.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开课学院" :label-width="formLabelWidth">
          <el-input v-model="form.aname" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelEdit">取 消</el-button>
        <el-button type="primary" @click="submitEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      courseList: [],
      dialogVisible: false,
      form: {},
      formLabelWidth: "120px",
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 2-获得班级列表
    async getCourses() {
      console.log("执行了getcourse方法");
      try {
        let res = await this.api.courses.getCourses();
        console.log(res);
        this.courseList = res.result;
      } catch (e) {
        alert("获取学院列表异常");
      }
    },

    async editCourse(data) {
      try {
        let res = this.api.courses.editCourse(data);
      } catch (e) {
        this.$message.error("编辑失败");
      }
    },

    async deleteCourse(_id) {
      try {
        let res = await this.api.courses.deleteCourse(_id);
        if (res) {
          this.getCourses();
          this.$message({
            type: "success",
            message: "成功删除",
          });
        }
      } catch (e) {
        this.$message.error("删除失败");
      }
    },

    handleEdit(index, row) {
      console.log(row);
      this.dialogVisible = true;
      this.form = row;
    },
    cancelEdit() {
      this.dialogVisible = false;
      this.$message("取消修改");
    },
    submitEdit() {
      try {
        let res = this.editCourse(this.form);
        if (res) {
          this.$message.success("修改成功");
          this.dialogVisible = false;
        }
      } catch (e) {
        this.$message.error("修改失败");
      }
    },

    // handlePass(_id) {
    //   this.$confirm("是否确定通过审核?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //   })
    //     .then(() => {
    //       this.censorExam({ _id: _id, flag: 1 }),
    //         this.$message({
    //           type: "success",
    //           message: "已通过审核!",
    //         });
    //       this.getExams();
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消操作",
    //       });
    //     });
    // },

    async handleDelete(index, row) {
      this.$confirm("确认删除该课程?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deleteCourse(row._id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    // async handleDelete(index, row) {
    //   this.$confirm("是否删除该课程?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //   })
    //     .then(() => {
    //   let res = this.api.courses.deleteCourse(row._id);
    //   if (res) {
    //                 this.getCourses();
    //     this.$message({
    //       type: "success",
    //       message: "成功删除",
    //     });

    //       }
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消操作",
    //       });
    //     });
    // },
  },

  async created() {
    this.getCourses();
  },

  mounted() {},
};
</script>

<style scoped></style>
