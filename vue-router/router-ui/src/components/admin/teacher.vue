<!-- 我的页面 -->
<template>
  <div>
    <!-- {{scoreList}} -->
    <el-table :data="teacherList" border style="width: 100%">
      <el-table-column prop="tid" label="工号" width="180"> </el-table-column>
      <el-table-column prop="tname" label="名字" width="100"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="100"> </el-table-column>
       <el-table-column prop="aname" label="学院"> </el-table-column>
       <el-table-column prop="title" label="职称"> </el-table-column>

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
      teacherList: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 2-获得班级列表
    async getTeachers() {
      try {
        let res = await this.api.teachers.getTeachers();
        console.log(res);
        this.teacherList = res.result;
      } catch (e) {
        alert("获取教师列表异常");
      }
    },
    // // 3-修改学生信息
    // async editStudent() {
    //   // const { _id, sname, age, address, hobby, gender, cla_id ,score} = data;
    //   // console.log("student是");
    //   // console.log(this.student);
    //   try {
    //     console.log("student是");
    //     console.log(this.student);
    //     let res = await this.api.students.editStudent(this.student);
    //     console.log(res);
    //     alert("修改成功");
    //     console.log(this.student);
    //     this.$router.push("/student/stuList");
    //     // this.$router.push("/student/stuList");
    //   } catch (e) {
    //     alert("修改失败");
    //   }
    // },
  },

  async created() {
    await this.getTeachers();
  },

  mounted() {},
};
</script>

<style  scoped>
</style>
