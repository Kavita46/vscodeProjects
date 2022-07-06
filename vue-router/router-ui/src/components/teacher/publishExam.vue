<!-- 我的页面 -->
<template>
  <div style="display: flex">
    <div></div>
    <div style="flex: 2">
      <el-form ref="form" :model="examInfo" label-width="120px">
        考试科目
        <el-select
          width="260px"
          v-model="examInfo.cname"
          placeholder="请选择考试科目"
        >
          <el-option
            v-for="item in courseList"
            :key="item.cid"
            :label="item.cname"
            :value="item.cname"
          >
          </el-option>
        </el-select>

        <el-form-item label="任课老师" width:60px>
          <el-input v-model="examInfo.tname"></el-input>
        </el-form-item>

        <el-form-item label="考试时间">
          <el-input v-model="examInfo.time"></el-input>
        </el-form-item>

        <el-form-item label="考试地点">
          <el-input v-model="examInfo.site"></el-input>
        </el-form-item>

        <el-radio v-model="examInfo.isOpen" label="开卷">开卷</el-radio>
        <el-radio v-model="examInfo.isOpen" label="闭卷">闭卷</el-radio>

        <!-- 这个v-model 是 选中的值? -->
        <!-- <el-select v-model="examInfo.isOpen">
          <el-option :label="1"> </el-option>
          <el-option :label="0"> </el-option>
        </el-select> -->
        <div></div>
        <el-form-item style="display:flex,, margin-top: 50px">
          <el-button
            style="flex: 1 ,margin-left:-100px"
            type="primary"
            @click="handlePublish"
            >立即发布</el-button
          >
          <el-button style="flex: 1">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      courseList: {},
      cname: "",
      examInfo: {
        tname: "",
        cname: "",
        time: "",
        site: "",
        isOpen: "闭卷",
        isAgree: false,
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 1-通过ID 获得学生信息

    // 2-获得班级列表
    handlePublish() {
      //   if (this.examInfo.cname) {
      //     this.addExam(this.examInfo);
      //   } else {
      //    this.$message.error("请输入课程名");
      //   }
      let exam = this.examInfo;
      if (exam.tname && exam.cname && exam.site && exam.time) {
        this.addExam(this.examInfo);
        this.$message({
          message: "考试发布成功,等待管理员审核",
          type: "success",
        });
        this.examInfo = {
          tname: "",
          cname: "",
          time: "",
          site: "",
          isOpen: "闭卷",
          isAgree: false,
        };
      } else {
        this.$message.error("考试信息不完整或者有误,请重新输入");
      }
    },

    async addExam(data) {
      try {
        let res = await this.api.exam.addExam(data);
        console.log(res);
      } catch (e) {
        console.log(e);
        alert("添加失败");
      }
    },

    async getCourses() {
      try {
        let res = await this.api.courses.getCourses();
        this.courseList = res.result;
        console.log(res);
      } catch (e) {
        alert("获取课程失败");
      }
    },
  },

  async created() {
    this.getCourses();
  },

  mounted() {},
};
</script>

<style  scoped>
.eItem {
  margin-left: -800px;
}
</style>
