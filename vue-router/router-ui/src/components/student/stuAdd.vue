<!-- 我的页面 -->
<template>
  <div>
    {{ student }}

    {{student.hobby.join(",")}}
    <el-form ref="form" :model="student" label-width="80px">
      <el-form-item label-width="500px" label="学生姓名">
        <el-input v-model="student.sname"></el-input>
      </el-form-item>

      <el-form-item label="年龄">
        <el-input v-model="student.age"></el-input>
      </el-form-item>

      <el-form-item label="住址">
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

      <el-form-item label="爱好">
        <el-checkbox-group v-model="student.hobby">
          <el-checkbox label="吃饭" name="type"></el-checkbox>
          <el-checkbox label="睡觉" name="type"></el-checkbox>
          <el-checkbox label="打豆豆" name="type"></el-checkbox>
          <!-- <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox> -->
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="student.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addStudent">添加学生</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      student: {
        hobby: [],
      },
      classList: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    async addStudent() {
      console.log("添加学生");
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

    async addStudent() {
      try {
        let res = await this.api.students.addStudent(this.student);

        console.log(res);
        alert('新增成功')
         this.$router.push("/student/stuList");
      } catch (e) {
        alert("服务器异常");
        console.log(e);
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
