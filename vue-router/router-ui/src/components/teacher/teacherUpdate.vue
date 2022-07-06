<!-- 我的页面 -->
<template>
  <div style="display: flex">
    <div style="flex: 2">
   

      <el-form ref="form" :model="teacher" el-width="120px">
   <el-form-item label="工号">
        <el-input readonly v-model="teacher.tid"></el-input>
      </el-form-item>

        <el-form-item label="姓名">
          <el-input readonly v-model="teacher.tname"></el-input>
        </el-form-item>

        <el-form-item label="年龄">
          <el-input v-model="teacher.age"></el-input>
        </el-form-item>

        <el-form-item label="学院">
          <el-input v-model="teacher.aname"></el-input>
        </el-form-item>

        <el-form-item label="职称">
          <el-input v-model="teacher.title"></el-input>
        </el-form-item>

        <el-form-item label="性别">
          <el-radio-group v-model="teacher.sex">
            <el-radio value="男" label="男"></el-radio>
            <el-radio value="女" label="女"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button
            v-if="role == 'teacher'"
            type="primary"
            @click="editTeacher"
            >立即修改</el-button
          >
          <el-button>取消</el-button>
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
      teacher: {
        sex: "",
        age: 0,
        title: "",
        tname: "",
        tid: 0,
        years: 0,
      },
      role: "",
      classList: [],
      labelPosition: "right",
      imageUrl: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    // async getTeachers() {
    //   try {
    //     let res = await this.api.teachers.getTeachers();
    //     console.log(res);
    //   } catch (e) {
    //     alert("获取教师失败");
    //   }
    // },
    // 1-通过ID 获得学生信息
    async getById(tid) {
      console.log("id是" + tid);
      try {
        let res = await this.api.teachers.getById(tid);
        console.log("res是");
        console.log(res);
        this.teacher = res.result;
        console.log();
      } catch (e) {
        alert("服务器异常");
      }
    },
    // 3-修改学生信息
    async editTeacher() {
      // const { _id, sname, age, address, hobby, gender, cla_id ,score} = data;
      // console.log("student是");
      // console.log(this.student);
      try {
        console.log(this.teacher);
        let res = await this.api.teachers.editTeacher(this.teacher);
        console.log(res);
        this.$message.success("修改成功");
        location.reload(true);
        // this.$router.push("/student/stuList");
        // this.$router.push("/student/stuList");
      } catch (e) {
        alert("修改失败");
      }
    },
    // 4-上传框的 图片检测
  },

  async created() {
    //  this.getTeachers();
    // 学生自查模式,不含参数
    let role = JSON.parse(localStorage.getItem("vuex")).user.role;
    if (role == "teacher") {
      this.role = role;
      let campus = JSON.parse(localStorage.getItem("vuex")).user.user.campusId;
      console.log("campus是");
      console.log(JSON.parse(localStorage.getItem("vuex")).user);
      console.log(campus);
      let res = await this.getById(campus);
      console.log(res);
    }
    // 教师他查模式,含参数
    // let itemId = this.$route.query.sid;
    // if (itemId) {
    //   let res = await this.getById(itemId);
    //   this.imageUrl = "http://localhost:7777/images/" + this.student.imgs;
    // }
    // // 获得初始渲染数据
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

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  border: 1px solid red;
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
