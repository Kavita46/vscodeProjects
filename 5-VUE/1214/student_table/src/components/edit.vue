<template>
  <div>
    <h1>修改</h1>

<!-- BUG 这里v-model  不能绑定editInfo, 是vue3 不支持子改父吗? -->
    <!-- v-model = "editInfo.sname" -->
    <!-- v-model = "editInfo.age" -->
    姓名<input type="text" v-model="stu.sname" /><br />
    年龄<input v-model="stu.age" type="text" /><br />
    <button @click = "update">修改</button>

    {{stu}}
  </div>
</template>

<script>
export default {
  props: ["editInfo"],
  name: "edit",

  data() {
    return {
      editName: "",
      editAge: "",
      stu: this.editInfo,
    };
  },
  methods: {
    update() {
console.log('点击了修改');
        this.$emit("update", this.stu);
        
        console.log(this.stu);

    }},


// !!! 上面的data是一次性的,所以用watch来把editInfo给予stu
  watch:{
     editInfo(newVal){
        //  XXX 这里如果直接用等号,则两者指向同一地址,用解构复制新的对象传进去
         this.stu = {...newVal};
     }
  }
};
</script>


