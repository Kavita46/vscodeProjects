<!-- 我的页面 -->
<template>
  <div>
    <h1>Stu</h1>

    <div id="total">
      <!-- total里放了左边的nav 和 右边的viewBox -->
      <div id="nav">
        <ul>
          <li>
            <router-link :to="`/stu/stuList/${id}/${name}`"
              >学生列表</router-link
            >
          </li>
          <li><router-link to="/stu/stuAdd">添加学生</router-link>"</li>
          <li><router-link to="/stu/stuLogin">登录</router-link></li>
        </ul>
      </div>
      <div id="viewBox">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name: "leonardo",
      id: 100,
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style lang = "scss" scoped>


*{
    margin:0;
    padding:0;
}

#total {
  display: flex;

  #nav {
    margin: 0;
    padding: 0;
    border: 1px solid cyan;
    flex: 1;
  }
  #viewBox {
    border: 1px solid cyan;
    flex: 8;
  }
}
</style>
