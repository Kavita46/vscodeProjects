<!-- 我的页面 -->
<template>
  <div style="display: flex">
    <div style="flex: 2">
      <el-form ref="form" :model="student" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="student.sname"></el-input>
        </el-form-item>

        <el-form-item label="年龄">
          <el-input v-model="student.age"></el-input>
        </el-form-item>

         <el-form-item label="学号">
          <el-input readonly v-model="student.sid"></el-input>
        </el-form-item>

        <el-form-item label="籍贯">
          <el-input v-model="student.address"></el-input>
        </el-form-item>

        <!-- 这个v-model 是 选中的值? -->
        <el-select v-model="student.cla_id">
          <el-option
            v-for="item in classList"
            :key="item._id"
            :label="item.cname"
            :value="item._id"
          >
          </el-option>
        </el-select>

        <!-- <el-form-item label="爱好">
          <el-checkbox-group v-model="student.hobby">
            <el-checkbox label="吃饭" name="type"></el-checkbox>
            <el-checkbox label="睡觉" name="type"></el-checkbox>
            <el-checkbox label="打豆豆" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox> 
          </el-checkbox-group>
        </el-form-item> -->

        <el-form-item label="性别">
          <el-radio-group v-model="student.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button v-if="role=='student'" type="primary" @click="editStudent">立即修改</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div style="flex: 1">
      <el-upload
        class="avatar-uploader"
        action="http://localhost:7777/students/uploadTemp"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      student: {
        // 这里不预定义会报错,length 不能读取
        hobby: [],
        imgs:'',
      },role:"",
      classList: [],
      labelPosition: "right",
      imageUrl: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 1-通过ID 获得学生信息
    async getById(sid) {
      console.log("id是" + sid);
      try {
        let res = await this.api.students.getById(sid);
        console.log('res是');
        console.log(res);
        this.student = res.result;
        console.log();
      } catch (e) {
        alert("服务器异常");
      }
    },

    // 2-获得班级列表
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
        let res = await this.api.students.editStudent(this.student);
        console.log(res);
        this.$message.success("修改成功");
        let role = this.role
        this.$router.push("/" + role);
        // this.$router.push("/student/stuList");
      } catch (e) {
       this.$message.error("修改失败");
      }
    },
    // 4-上传框的 图片检测
    handleAvatarSuccess(res, file) {
      // XXX 本地地址回显图片

      this.$set(this.student,'imgs',file.response.head)
      // this.student.imgs = file.response.head;
      console.log("student的head是");
      console.log(this.student.imgs);
      // console.log(file.response.head); 这里是临时的文件名
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },

  async created() {
// 学生自查模式,不含参数
   let role = JSON.parse(localStorage.getItem("vuex")).user.role;
    if (role == "student") {
      this.role = role;
      let campus = JSON.parse(localStorage.getItem("vuex")).user.user.campusId;
      await this.getById(campus);
    this.imageUrl =  'http://localhost:7777/images/'+this.student.imgs;
    }
// 教师他查模式,含参数
  let itemId = this.$route.query.sid;
  if(itemId){
    let res = await this.getById(itemId);
    this.imageUrl =  'http://localhost:7777/images/'+this.student.imgs;
  }
    // 获得初始渲染数据

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
