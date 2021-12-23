<!-- 我的页面 -->
<template>
  <div>
      这是子组件
    <button @click="changeFather">修改</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    changeFather() {
      this.$emit("update:fatherName", "你爹来了");
    },
  },
};
</script>

<style  scoped>
</style>
