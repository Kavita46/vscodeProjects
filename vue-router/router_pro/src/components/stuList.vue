<!-- 我的页面 -->
<template>
  <div>
    <div id="edit" v-if="isEdit">
      姓名 <input v-model="newStudent.sname" type="text" /><br />
      性别 <input v-model="newStudent.gender" type="text" /><br />
      年龄 <input v-model="newStudent.age" type="text" /><br />
      <!-- 爱好  <input v-model = 'newStudent.hobby' type="text"><br> -->
      地址 <input v-model="newStudent.address" type="text" /><br />
      <!-- 班级  <input v-model = 'newStudent.cla' type="text"><br> -->
      <button @click="editStudent">确认修改</button>

      <br />

      {{ newStudent }}
    </div>

    这是学生列表

    <!-- menuKey = {{menuKey}} -->
    <table border="1px">
      <thead>
        <td>ID</td>
        <td>姓名</td>
        <!-- <td>头像</td> -->
        <td>性别</td>
        <td>年龄</td>
        <td>住址</td>
        <td>爱好</td>
        <td>班级</td>
        <td>flag</td>
        <td>操作</td>
      </thead>

      <tbody>
        <tr v-for="(item, index) in stuList" :key="index">
          <td>{{ item._id }}</td>
          <td>{{ item.sname }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.hobby }}</td>
          <td>{{ item.cla_id }}</td>
          <td>{{ item.flag }}</td>
          <td>
            <input
              type="button"
              value="删除"
              id="btn_delete"
              @click="deleteStudent"
            />
            <button id="btn_edit" @click="goEdit">修改</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <button @click="getList">渲染</button> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // 用来渲染的数据
      stuList: [],
      isEdit: false,
      menuKey: 0,
      // 这里是点击修改之后的新的学生信息
      newStudent: {
        hobby: "吃饭",
      },
    };
  },
  computed: {},
  watch: {
    // stuList: function (newVal) {
    //   this.stuList = newVal;
    // },
    // menuKey: function(newVal ){
    //     this.menuKey = newVal
    // }
  },
  methods: {
    // 1-点击修改出现修改框
    async goEdit(e) {
      // this.$router.push('/stu/stuList/stuEdit');
      this.isEdit = true;
      let editId = e.target.parentNode.parentNode.children[0].innerHTML;
      console.log(editId);
      try {
        let result = await this.api.students.getById(editId);
        console.log(result);

        this.newStudent = result.result;
        console.log(this.newStudent);
      } catch (e) {
        console.log(e);
      }
    },
    // 2-从数据库获得要渲染的stuList数组

    // 如果stuList 数据改变,触发update,update调用getList, getList 又给stuList赋值,
    // 导致stuList 改变
    async getList() {
      try {
        let result = await this.api.students.getStudents();
        // 没有过滤的数组result.result
        this.stuList = result.result.filter((item) => item.flag == 1);

        // this.stuList = result;
        // console.log(result.result);
        // console.log(this.stuList);
      } catch (e) {
        alert("服务器异常");
        // console.log(e);
      }
    },

    // 3-点击删除后删除学生
    async deleteStudent(e) {
      // 通过节点获取点击删除的表单元素的id , 然后传到接口
      let id = e.target.parentNode.parentNode.children[0].innerHTML;
      console.log(id);

      try {
        let result = await this.api.students.deleteStudent(id);

        this.getList();
        console.log(result);
        alert("删除成功");
      } catch (e) {
        alert("服务器异常");
      }
    },

    async editStudent() {
      try {
        let result = await this.api.students.editStudent(this.newStudent);
        console.log(result);
        this.getList();
        this.isEdit = false;
        alert("修改成功");
      } catch (e) {
        alert("服务器异常");
      }
    },
  },

  created() {
    console.log(this.$route.params);
    // let list = this.getList();
    //    this.getList();

    // console.log(list);
  },
  mounted() {
    this.getList();
  },

  updated() {
    // this.getList();
  },
  beforeCreate() {
    // this.getList();
  },
};
</script>

<style  scoped>
</style>
