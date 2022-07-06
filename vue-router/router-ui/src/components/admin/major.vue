<!-- 我的页面 -->
<template>
  <div>
    <!-- {{scoreList}} -->
    <el-table :data="majorList" border style="width: 100%">
      <el-table-column prop="aname" label="学院名称" width="180">
      </el-table-column>
      <el-table-column prop="mname" label="专业" width="180">
      </el-table-column>
      <el-table-column prop="stuCount" label="专业人数"> </el-table-column>

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
      majorList: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 2-获得班级列表
    async getMajors() {
      try {
        let res = await this.api.major.getMajors();
        console.log(res);
        this.majorList = res.result;
      } catch (e) {
        alert("获取专业列表异常");
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
    await this.getMajors();
  },

  mounted() {},
};
</script>

<style  scoped>
</style>
