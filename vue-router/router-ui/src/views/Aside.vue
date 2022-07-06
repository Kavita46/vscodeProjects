<!-- 我的页面 -->
<template>
  <div id="aside">
    <el-menu
      :router="true"
      unique-opened
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse-transition="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu
        unique-opened
        index="item.index"
        v-for="item in menus"
        :key="item.index"
      >
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
      stuMenu: [
        {
          index: "/student",
          title: "学生功能",
          icon: "el-icon-user-solid",
          submenus: [
            // {
            //   index: "/student/stuList",
            //   title: "学生列表",
            // },
            // {
            //   index: "/student/stuAdd",
            //   title: "新增学生",
            // },
            {
              index: "/student/stuScore",
              title: "查看成绩",
            },
            // {
            //   index: "/student/allScore",
            //   title: "所有成绩",
            // },
            {
              index: "/student/stuUpdate",
              title: "个人信息",
            },
          ],
        },
      ],

      teacherMenu: [
        {
          index: "2",
          title: "教师功能",
          icon: "el-icon-s-grid",
          submenus: [
            {
              index: "/teacher/stuList",
              title: "学生列表",
            },
            // {
            //   index: "/student/classList",
            //   title: "班级列表",
            // },
            {
              index: "/teacher/allScore",
              title: "所有学生成绩",
            },
            {
              index: "/teacher/publishExam",
              title: "发布考试",
            },
            {
              index: "/teacher/teacherUpdate",
              title: "个人信息",
            },
          ],
        },
      ],

      adminMenu: [
        {
          index: "3",
          title: "管理员功能",
          icon: "el-icon-eleme",
          submenus: [
            {
              index: "/admin/academy",
              title: "学院管理",
            },
            {
              index: "/admin/major",
              title: "专业管理",
            },
            {
              index: "/admin/class",
              title: "班级管理",
            },

            {
              index: "/admin/student",
              title: "学生管理",
            },
            {
              index: "/admin/teacher",
              title: "教师管理",
            },
            {
              index: "/admin/course",
              title: "课程管理",
            },
            {
              index: "/admin/exam",
              title: "考试审核",
            },
          ],
        },
      ],

      baseMenu: [
        {
          index: "4",
          title: "系统设置",
          icon: "el-icon-eleme",
          submenus: [
            {
              index: "/user/login",
              title: "退出账户",
            },
            {
              index: "/user/update",
              title: "修改密码",
            },
          ],
        },
      ],

      menus: [],
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

  created() {
    console.log("验证仓库角色");
    let role = this.$store.state.user.user.role;
    console.log(role)
    if (role == "student") {
      this.menus = this.stuMenu.concat(this.baseMenu);
    } else if (role == "teacher") {
      this.menus = this.teacherMenu.concat(this.baseMenu);
    } else if (role == "admin") {
      this.menus = this.adminMenu.concat(this.baseMenu);
    }
  },
};
</script>

<style  scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
