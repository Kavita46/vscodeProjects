<!-- 我的页面 -->
<template>
  <div>
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
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

          <el-button>注册</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const {mapState, mapMutations,mapActions } = createNamespacedHelpers('user');



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
    };
  },
  computed: {},
  watch: {},
  methods: {

...mapMutations(['CHANGE_USER']),


    async login() {
      try {
        let res = await this.api.users.login(this.user);
        if (res.result) {
          // alert("登录成功");
          this.$message({
            message: "登录成功",
            type: "success",
            duration:1000
          });
          this.CHANGE_USER(res.result);
console.log(res.result);
          // this.CHANGE_USER({username:'zzz', password:'123'})
          this.$router.push("/student");
        } else {
          alert("登录失败,用户名或密码错误");
        }
      } catch (e) {
        alert("服务器异常");
      }
    },
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
