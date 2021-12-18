<template>
  <div>

<input type="text" v-model='myName' name="" id="">

    子组件内容:{{ sname }}

    年龄{{ age }}

    性别{{ gender }}

    <button @click="say">调用</button>
  </div>
</template>

<script>
export default {
  name: "son",

  data(){
      return {
          myName:''
      }
  },

  props: ["sname", "age", "gender"],

  methods: {
    say() {
      this.$emit("say");
    },
  },
};
</script>

<style scoped>
</style>