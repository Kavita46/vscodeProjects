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
          <i class="el-icon-user-solid"></i>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>

          <el-menu-item
            v-for="subItem in item.submenus"
            :key="subItem.index"
            :index="subItem.index"
            >{{ subItem.title }}
          </el-menu-item>
        </el-menu-item-group>
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
          index: "1",
          title: "学生管理",
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
              index: "/student/stuUpdate",
              title: "修改学生",
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
          submenus: [
            {
              index: "/class/classList",
              title: "班级列表",
            },
            {
              index: "/class/classAdd",
              title: "新增班级",
            },
          ],
        },
        {
          index: "3",
          title: "用户管理",
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
