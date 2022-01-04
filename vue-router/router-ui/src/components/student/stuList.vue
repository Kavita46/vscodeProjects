<!-- 我的页面 -->

<template>
  <div>
    <!-- <span>显示page信息</span>
    <br />
    {{ pageData }} -->
    <!-- 1-表格模块 -->
<el-input v-model='searchKey' @change='searchStudents' style ='width:500px'></el-input>
<el-button @click='searchStudents'>搜索</el-button>

    <el-table :data="pageData.result" style="width: 100%">
      <template>
        <el-table-column prop="_id" label="学号" width="150"></el-table-column>
        <el-table-column prop="sname" label="姓名" width="100"></el-table-column>
        <el-table-column prop="age" label="年龄" width="50"></el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
          width="50"
        ></el-table-column>
        <el-table-column
          prop="cla_id.cname"
          label="班级"
          width="50"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="住址"
          width="50"
        ></el-table-column>
        <el-table-column prop="imgs" label="头像" width="100">
          <template slot-scope="scope">
            <el-avatar v-if = "scope.row.imgs"
              :src="`http://localhost:7777/images/${scope.row.imgs}`"
            ></el-avatar>
            <el-avatar v-else >无</el-avatar>
          </template>
        </el-table-column>

        <el-table-column
          prop="hobby"
          label="爱好"
          width="180"
        ></el-table-column>

        <el-table-column label="操作">
          <!-- XXX 如果要获得点击按钮的那一栏的值,一定要加template -->
          <template slot-scope="scope">
            <el-button v-privilege="'编辑'" size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
            v-privilege="'删除'"
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!-- 2-分页模块 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[5, 6, 7, 8, 9]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageData.count"
    >
    </el-pagination>

  </div>
</template>

<script>
// import {createNameSpacedHelpers} from 'vuex'

import { createNamespacedHelpers, mapMutations } from "vuex"; // 引入vuex的创建命名空间的方法
const { mapState, mapActions } = createNamespacedHelpers("student");

export default {
  components: {},
  data() {
    return {
      searchKey:'',
      currentPage: 1,
      // menus:['学号', '姓名', '年龄','性别','班级','住址', '爱好', '操作']
    };
  },
  computed: {
    ...mapState({
      studentList: (state) => state.studentList,
      pageData: (state) => state.pageData,
    }),
  },
  watch: {},
  methods: {
    // 从vuex状态机里取得数据和方法
    ...mapActions(["getStudents", "getByPages"]),
    ...mapMutations(["CHANGE_PAGEDATA"]),

    // 1-删除事件
    async handleDelete(index, row) {
      console.log(index, row);
      try {
        // BUG 假如不用await 接收, 第一次点击之后 不会及时刷新,也就是需要删除两个(第二个进入的时候上一个才执行)
        let res = await this.api.students.deleteStudent(row._id);

        if (res) {
          this.getStudents();
          this.$message({
            message: "删除成功",
            type: "success",
          });
        }
      } catch (e) {
        this.$message({
          message: "删除失败",
          type: "error",
        });
      }
    },

    // 2-修改事件
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push("/student/stuUpdate?_id=" + row._id);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageData.pageSize = val;
      this.currentPage = 1;
      this.CHANGE_PAGEDATA(this.pageData)
       this.getByPages({ pageIndex: 1, pageSize: this.pageData.pageSize, k:this.searchKey });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageData.pageIndex = val;
       this.CHANGE_PAGEDATA(this.pageData)
        this.getByPages({ pageIndex: this.pageData.pageIndex, pageSize: this.pageData.pageSize, k: this.searchKey });
    },

    // 6-搜索方法

    searchStudents(){
      this.pageData.pageIndex = 1;
      console.log('搜索关键词' + this.searchKey);
       this.currentPage = 1;
      this.getByPages({ pageIndex: this.pageData.pageIndex, pageSize: this.pageData.pageSize, k: this.searchKey });
    }
  },

  async created() {
    this.getStudents();
    // 需要传进来一个含有 pageIndex, pageSize, k 的对象
    // let pageIndex = 1;
    // let pageSize = 5;
    // let Pdata = ;

    this.getByPages({ pageIndex: 1, pageSize: 5, k: "" });
  },
};
</script>

<style scoped></style>
