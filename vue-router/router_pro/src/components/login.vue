<!-- 我的页面 -->
<template>
  <div >
    <input v-model="user.username" type="text" />
    <br />
    <input v-model="user.password" type="text" />
    <br />
    <button @click="login">登录</button>
    {{ user }}
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
user: { username: "", password: "" },
    }
  },
  computed: {},
  watch: {},
  methods: {
   async login() {
      try {

        // this.api 是undefined 
        console.log(this.api);

        let result = await this.api.users.login(this.user)
        
        // .$axios.get("/users/login", this.user);
        // console.log(result.data);
        console.log(result);
      } catch (e) {
        // alert("服务器异常");
        console.log(e);
      }
    },
  }
  
}
</script>

<style  scoped>

</style>
