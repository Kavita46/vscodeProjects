<!-- 我的页面 -->
<template>
  <div>
    <h1>这是son1内容</h1>
  </div>
</template>

<script>
// import bus from "../bus.js";

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {};
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）

  //   TAG 被调用的组件,mouted里写被调用的组件的函数
  mounted() {
    bus.$on("add", function (data) {
      console.log(data);
    });
  },
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
