<!-- 我的页面 -->
<template>
  <div>
    <div class="background">
      <div>
        <!-- <img  v-for = 'item in imgs' :key = 'item.url'   v-lazy="item.url" width="300px" height = "300px" display = 'block' /> -->
      </div>

      <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>

    <div>
      <img src="" alt="" />
    </div>
    <div class="main">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="display: block; margin: 0 auto; text-align: center"
            >用户登录</span
          >
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>

        用户名<el-input v-model="user.username"></el-input>
        <br />
        密码<el-input v-model="user.password"></el-input>
        <br />
        <div id="btn_bar">
          <el-button @click="login">登录</el-button>

          <el-button @click='register'>注册</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations, mapActions } = createNamespacedHelpers("user");

export default {
  components: {},
  data() {
    return {
      // imgSrc: require("../"),
      imgSrc: require("../../assets/2.jpg"),
      user: {
        username: "",
        password: "",
      },

      imgs: [
        {
          id: 1,
          url: require("../../assets/h2.jpg"),
        },
        {
          id: 2,
          url: require("../../assets/h3.jpg"),
        },
        {
          id: 3,
          url: require("../../assets/h4.jpg"),
        },
        {
          id: 4,
          url: require("../../assets/h1.jpg"),
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    ...mapMutations(["CHANGE_USER"]),

    async login() {
      try {
        let res = await this.api.users.login(this.user);
        if (res.result) {
          this.$message({
            message: "登录成功",
            type: "success",
            duration: 1000,
          });
          this.CHANGE_USER(res.result);
          console.log(res.result);

          console.log(res.token);
          localStorage.token = res.token;
          // this.CHANGE_USER({username:'zzz', password:'123'})
          this.$router.push("/student");
        } else {
          this.$message({
            message: "用户名或密码错误,登录失败",
            type: "error",
            duration: 1000,
          });

          this.user = {};
        }
      } catch (e) {
        alert("服务器异常");
      }
    },

    async register() {
      try {
        let res = await this.api.users.register(this.user);
        if (res.result) {
          this.$message({
            message: "注册成功",
            type: "success",
            duration: 1000,
          });
        } else {
          this.$message({
            message: "注册失败",
            type: "error",
            duration: 1000,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },

  created() {
    if (localStorage.token) {
      alert("您已经登录,正在跳转主页");
      this.$router.push("/student");
    }
  },
};
</script>

<style  scoped>
.background {
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
}

.main {
  z-index: 1;
  /* 透明度 */
  opacity: 0.8;
}

#btn_bar {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.el-input {
  margin-bottom: 10px;
}

.el-card {
  margin: 0 auto;
  position: absolute;
  top: 30%;
  left: 30%;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
