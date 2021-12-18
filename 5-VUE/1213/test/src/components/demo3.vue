<template>
  <div>
    <span>{{stu}}</span>

    <button @click = "change">改变</button>
  </div>
</template>

<script>
export default {
  name: "demo3",

  data() {
    return {
      stu: {
        name: "张三",
        age: 18,
      },
    };
  },
  methods:{
      change:function(){


         this.$set(this.stu,'name','李四');

         console.log(this.stu);
        // this.stu.name = "李四";
      }
  }
};
</script>

