<template>
  <div>
    <span>"总价格是 {{ getName }}</span>

<br>
    <span>{{changeMessage}}</span>
  </div>
</template>

<script>
export default {
  name: "compute",
  data() {
    return {
      price: 12,
      count: 5,
      firstName: "张",
      lastName: "三",
      message:'hello'
    };
  },

  computed: {
changeMessage:{
get(){
  return this.message + 'world'
},
set(newValue){
console.log(newValue);
// this.essage = 
}
},


    getName: {
      get() {
        return this.firstName + this.lastName;
      },

      set(newValue) {
        const names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
  },
};
</script>

<style scoped>
</style>