<!-- 我的页面 -->
<template>
  <div>
    <div>
      用户名<input v-model="user.username" type="text" />
      <br />
      密码<input v-model="user.password" type="text" />
      <br />
      <input type="file" @change="uploadTemp" />

      <img width="100px" height="100px" :src="headSrc" alt="" />

      <br />

      <button @click="register">注册</button>
      {{ user }}
    </div>
  </div>
</template>

<script>
// import head from "http://localhost:7777/images/h1.jpg"
export default {
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
        head: "",
      },
    };
  },
  computed: {
    headSrc:function(){ return "http://localhost:7777/temp/" + this.user.head}
  },
  watch: {},
  methods: {
    async register() {
      try {
        // this.api 是undefined
        console.log(this.api);
        let result = await this.api.users.register(this.user);

        // .$axios.get("/users/login", this.user);
        // console.log(result.data);
        console.log(result);
        alert("注册成功");
      } catch (e) {
        // alert("服务器异常");
        console.log(e);
      }
    },
    async uploadTemp(e) {
      let file = e.target.files[0];
      let fd = new FormData();
      fd.append("file", file);
      //   把fd传过去
      let result = await this.api.users.uploadTemp(fd);
      // console.log(...result);

      // console.log({result})
      console.log(result.head);
      this.user.head = result.head;

      //         console.log(result.data);
    },
  },
};
</script>

<style  scoped>
</style>
