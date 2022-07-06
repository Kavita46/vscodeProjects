<!-- 我的页面 -->
<template>
  <div>
    <el-dialog
      title="提交成绩"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-input v-model="inputScore"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="confirmEdit">提 交</el-button>
      </span>
    </el-dialog>

    <el-table :data="fullList" border style="width: 100%">
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
      <el-table-column label="操作">
        <!-- XXX 如果要获得点击按钮的那一栏的值,一定要加template -->
        <template slot-scope="scope">
          <el-button
            type="primary"
            plain
            v-if="scope.row.score == -1"
            size="mini"
            @click="handleSubmit(scope.$index, scope.row)"
            >提交成绩</el-button
          >
          <el-button
            type="danger"
            disabled
            plain
            v-if="scope.row.score != -1"
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            >修改成绩</el-button
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
      dialogVisible: false,
      inputScore: -1,
      inputId: "",
      scoreObj: { _id: "", score: -1 },
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
  computed: {
    // scoreList:[]
  },
  watch: {},
  methods: {
    handleClose(done) {
      let that = this;
      this.$confirm("确认关闭？")
        .then((_) => {
          this.$message('已关闭')
          that.getFullTable();
          done();
        })
        .catch((_) => {});
    },

    handleCancel() {
      this.dialogVisible = false;
    },

    handleEdit(index, row) {
      this.dialogVisible = true;
    },

    handleSubmit(index, row) {
      let that = this;
      that.inputScore = row.score;
      console.log("that的值");
      console.log(that.inputScore);
      this.dialogVisible = true;
      this.inputId = row._id;

      console.log(row);
    },

    async confirmEdit() {
      let that = this;
      console.log(this.inputId);

      that.scoreObj._id = that.inputId;
      that.scoreObj.score = that.inputScore;
      console.log(that.scoreObj);
      if (that.scoreObj.score >= 0 && that.scoreObj.score <= 100) {
        that.editScore(that.scoreObj);

        this.dialogVisible = false;
      } else {
        this.$message.error("成绩输入值非法,请重新输入");
      }
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
        let res = await this.api.scores.getScoresById(sid);
        console.log("根据ID获取成绩");
        console.log(res);
        console.log(res.result);
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

    async editScore(scoreObj) {
      try {
        let res = await this.api.scores.editScore(scoreObj);
        if (res) {
          this.$message("提交成功");
          this.getFullTable();
        } else {
          this.$message.error("提交失败");
        }
        // await this.getFullTable();
      } catch (e) {
        this.$message.error("提交成绩失败");
      }
    },

    //     // 3-修改学生信息
    // async editStudent() {
    //   // const { _id, sname, age, address, hobby, gender, cla_id ,score} = data;

    //   try {

    //     let res = await this.api.students.editStudent(this.student);
    //     console.log(res);
    //     alert("修改成功");
    //      console.log(this.student);
    //     this.$router.push("/student/stuList");
    //     // this.$router.push("/student/stuList");
    //   } catch (e) {
    //     alert("修改失败");
    //   }

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
  },

  async created() {
    let itemId = this.$route.query._id;
    let sid = Number.parseInt(this.$route.query.sid);
    console.log(typeof sid);
    console.log(sid);

    // let res = await this.getById(itemId);
    await this.getScoresById(sid);
    await this.getFullTable();
  },

  mounted() {},
};
</script>

<style scoped>
</style>
