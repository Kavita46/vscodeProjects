<!-- 我的页面 -->
<template>
  <div>
    <p>登录</p>

    账号<input type="text" v-model="user.username" name="" id="" /> 密码<input
      type="text"
      v-model="user.password"
      name=""
      id=""
    />

    <button @click="login">登录</button>

    {{ user }}
    <br />
    接口返回值{{ result.data }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      user: {},

      result: {},
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {
    // 调用函数,从接口获得数据,储存在data里,

    async login() {
      let result = await axios({
        url: "http://localhost:7777/users/login",
        methods: "GET",
        params: this.user,
      });

      this.result = result;
      console.log(result);
    },
  },
};
</script>

<style scoped></style>
