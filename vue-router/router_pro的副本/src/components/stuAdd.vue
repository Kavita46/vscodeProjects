<!-- 我的页面 -->
<template>
  <div>
    姓名 <input v-model="newStudent.sname" type="text" /><br />
    性别 <input v-model="newStudent.gender" type="text" /><br />
    年龄 <input v-model="newStudent.age" type="text" /><br />
    <!-- 爱好  <input v-model = 'newStudent.hobby' type="text"><br> -->
    地址 <input v-model="newStudent.address" type="text" /><br />
    <!-- 班级  <input v-model = 'newStudent.cla' type="text"><br> -->
    <button @click='addStudent'>确认添加</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      newStudent: {
        sname: "",
        age: "",
        address: "",
        // hobby: "",
        // gender:'',
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
   async addStudent() {
      try {
          console.log('调用click');
        let result = await this.api.students.addStudent(this.newStudent);
        console.log(result);
        alert("添加成功");

        this.$router.push('/stu/stuList/3/add');
      } catch (e) {
        console.log(e);
        alert("添加失败");
      }
    },
  },
};
</script>

<style  scoped>
</style>
