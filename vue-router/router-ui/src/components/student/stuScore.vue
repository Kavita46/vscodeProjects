<!-- 我的页面 -->
<template>
  <div>
    <!-- {{scoreList}} -->
    <el-table :data="scoreList" border style="width: 100%">
      <el-table-column prop="sid" label="学号" width="180"> </el-table-column>
      <el-table-column prop="stuInfo[0].sname" label="姓名" width="80">
      </el-table-column>
      <el-table-column prop="cid" label="课序号" width="180"> </el-table-column>
      <el-table-column prop="cInfo[0].cname" label="课程名"> </el-table-column>
      <el-table-column prop="score" label="成绩">
        <template slot-scope="scope">
          <span v-if="scope.row.score == -1">无成绩</span>
          <span v-if="scope.row.score != -1">{{ scope.row.score }}</span>
        </template>
      </el-table-column>

    </el-table>
    <el-button @click="goBack">返回</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      scoreList: [],
      courseList: [],
      fullList: [],
      student: {
        // 这里不预定义会报错,length 不能读取
        hobby: [],
        imgs: "",
      },
      classList: [],
      labelPosition: "right",
      imageUrl: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // 1-通过ID 获得学生信息
    async getScoreTable() {
      try {
        let res = await this.api.scores.getScoreTable();
        console.log(res);
        console.log(res.result);
        this.scoreList = res.result;
      } catch (e) {
        alert("获取成绩单异常");
      }
    },

    async getFullTable() {
      try {
        let res = await this.api.scores.getFullTable();
        this.fullList = res.result;
        console.log("fullList是");
        // console.log(this.fullList);
      } catch (e) {
        alert("获取联立成绩单异常");
      }
    },

    async getScoresById(sid) {
      try {
        // console.log('传进来的参数是'+ sid)
        let queryId = sid;
        console.log(typeof queryId);
        let res = await this.api.scores.getScoresById(queryId);
        console.log("根据ID获取成绩");
        console.log(res);
        console.log(res.result);
        this.scoreList = res.result;
      } catch (e) {
        alert("根据ID获取成绩异常");
      }
    },

    // 2-获得班级列表
    async getCourses() {
      try {
        let res = await this.api.courses.getCourses();
        console.log(res);
        this.courseList = res.result;
      } catch (e) {
        alert("获取课程列表异常");
      }
    },

    async getClasses() {
      try {
        let res = await this.api.classes.getClasses();
        console.log(res);
        this.classList = res.result;
        // console.log(this.classList);
      } catch (e) {
        alert("class服务器异常");
      }
    },

    // 3-修改学生信息
    async editStudent() {
      // const { _id, sname, age, address, hobby, gender, cla_id ,score} = data;
      // console.log("student是");
      // console.log(this.student);
      try {
        console.log("student是");
        console.log(this.student);
        let res = await this.api.students.editStudent(this.student);
        console.log(res);
        alert("修改成功");
        console.log(this.student);
        this.$router.push("/student/stuList");
        // this.$router.push("/student/stuList");
      } catch (e) {
        alert("修改失败");
      }
    },
    // 4-上传框的 图片检测
  },

  async created() {
    let role = JSON.parse(localStorage.getItem("vuex")).user.role;

    if (role == "student") {
      let campus = JSON.parse(localStorage.getItem("vuex")).user.user.campusId;
      await this.getScoresById(campus);
    }
    // console.log("query是");
    // console.log(this.$route.query.sid);
    // let res = await this.getById(itemId);
    let sid = this.$route.query.sid;
    if (sid) {
      console.log(sid);
      await this.getScoresById(sid);
    }
    this.imageUrl = "http://localhost:7777/images/" + this.student.imgs;
    // this.getClasses();
    //   let _id = $this.route.query._id;
    //   console.log(_id);
  },

  mounted() {},
};
</script>

<style  scoped>
.eItem {
  margin-left: -800px;
}
</style>
