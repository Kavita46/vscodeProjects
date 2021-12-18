<template>
  <div>
    <h1>添加</h1>

    姓名<input v-model="newName" type="text" /><br />
    年龄<input v-model="newAge" type="text" /><br />
    <button @click="addNew">添加</button>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      newName: "",
      newAge: "",
    };
  },

  // props:['stuList'],

  methods: {
    addNew() {
        console.log('点击了添加');
        console.log(this.newName);
        console.log(this.newAge);
      this.$emit("add", this.newName, this.newAge);

      this.newName = "";
      this.newAge = "";
    },
  },
};
</script>


