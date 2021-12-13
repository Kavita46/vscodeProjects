<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
   -->

  <div>
    <eat></eat>
    <change></change>
    <cart></cart>
    <compute></compute>
    <todo></todo>
  </div>
</template>


   <!-- <todo></todo>
   -->

<script>
// import HelloWorld from './components/HelloWorld.vue'
import eat from "./components/eat.vue";
import change from "./components/change.vue";
import cart from "./components/cart.vue";
import compute from "./components/compute.vue";

import todo from './components/todo.vue'
export default {
  name: "App",
  components: {
    eat,
    change,
    cart,
    compute,todo
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
