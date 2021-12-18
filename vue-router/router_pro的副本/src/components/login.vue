<!-- 我的页面 -->
<template>
  <div >
    <input v-model="user.username" type="text" />
    <br />
    <input v-model="user.password" type="text" />
    <br />
    <button @click="login">用户登录</button>
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
        let result = await this.api.users.login(this.user)
        console.log(result);
      } catch (e) {
        alert("服务器异常");
        console.log(e);
      }
    },
  },

beforeRouteLeave(to, from, next){

  if(this.user.username){
    let isLeave = confirm('还有数据,确认离开吗?') ;
    if(isLeave){
      next();
  }
}else{
  next();
}

}
  
}
</script>

<style  scoped>

</style>
