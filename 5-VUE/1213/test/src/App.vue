<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <!-- <selectAll></selectAll> -->
    <!-- <hear></hear> -->

    <demo1></demo1>
    <demo2></demo2>
    <demo3></demo3>

  <father></father>
  </div>
</template>

<script>
import father from './components/1214demo/father.vue'
import demo3 from './components/demo3.vue'
import demo1 from "./components/demo1.vue";
import demo2 from "./components/demo2.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// rom "./components/selectAll.vue";
// import hear from "./components/hear.vue";
export default {
  name: "App",
  components: {
    demo1,
    demo2,
    demo3,
    father
    // HelloWorld,

    // hear
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
