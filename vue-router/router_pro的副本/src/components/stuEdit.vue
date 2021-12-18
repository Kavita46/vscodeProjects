<!-- 我的页面 -->
<template>
  <div >
  <div>
    姓名 <input v-model="newStudent.sname" type="text" /><br />
    性别 <input v-model="newStudent.gender" type="text" /><br />
    年龄 <input v-model="newStudent.age" type="text" /><br />
    <!-- 爱好  <input v-model = 'newStudent.hobby' type="text"><br> -->
    地址 <input v-model="newStudent.address" type="text" /><br />
    <!-- 班级  <input v-model = 'newStudent.cla' type="text"><br> -->
    <button @click="addStudent">添加学生</button>
  </div>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
newStudent:{
    sname:'',
    age:'',
    address:'',
    gender:'',
    // hobby:'',

}
    }
  },
  computed: {},
  watch: {},
  methods: {

  },
}
</script>

<style  scoped>

</style>
