<!-- 我的页面 -->
<template>
  <div id="aside">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-submenu index="item.index" v-for="item in menus" :key="item.index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <!-- <el-menu-item-group> -->
          <!-- <template slot="title">分组</template> -->
          <el-menu-item
            v-for="subItem in item.submenus"
            :key="subItem.index"
            :index="subItem.index"
            >{{ subItem.title }}
          </el-menu-item>
        <!-- </el-menu-item-group> -->
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menus: [
        {
          index: "/student",
          title: "学生管理",
          icon:"el-icon-user-solid",
          submenus: [
            {
              index: "/student/stuList",
              title: "学生列表",
            },
            {
              index: "/student/stuAdd",
              title: "新增学生",
            },
           
            {
              index: "/student/stuSync",
              title: "测试sync",
            },
          ],
        },
        {
          index: "2",
          title: "班级管理",
          icon:"el-icon-s-grid",
          submenus: [
            {
              index: "/student/classList",
              title: "班级列表",
            },
            {
              index: "/student/classAdd",
              title: "新增班级",
            },
            {
              index:'/student/classChart',
              title:'统计图表'
            }
          ],
        },
        {
          index: "3",
          title: "用户管理",
          icon:"el-icon-eleme",
          submenus: [
            {
              index: "/user/login",
              title: "登录",
            },{
              index:'/user/register',
              title:'注册'
            },{
              index:'/user/update',
              title:'修改信息'
            }
          ],
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style  scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
