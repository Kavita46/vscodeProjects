<!-- 我的页面 -->
<template>
  <div>
    <input v-model="user.username" type="text" />
    <br />

    <input v-model="user.password" type="text" />

    <br />

    <button @click="register">注册</button>

    {{ user }}
  </div>
</template>

<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      user: { username: "", password: "" },
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  methods: {
    async register() {
      try {
        let result = await this.api.users.register(this.user)
        
        // .$axios.get("/users/login", this.user);
        // console.log(result.data);
        console.log(result);
      } catch (e) {
        alert("服务器异常");
      }
    },
  },
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
};
</script>

<style  scoped>
</style>
