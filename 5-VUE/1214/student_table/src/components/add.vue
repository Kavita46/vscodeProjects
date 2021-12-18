<template>
  <div>
    <h1>添加</h1>

    姓名<input v-model="stu.newName" type="text" /><br />
    年龄<input v-model="stu.newAge" type="text" /><br />
    <button @click="addNew">添加</button>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      // newName: "",
      // newAge: "",


      stu:{
        newName:'',
        newAge:''
      }
    };
  },

  // props:['stuList'],

  methods: {
    addNew() {
        console.log('点击了添加');
  
      this.$emit("add", this.stu);

      this.stu.newName = "";
      this.stu.newAge = "";
    },
  },
};
</script>


