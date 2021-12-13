<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <!-- <selectAll></selectAll> -->
    <!-- <hear></hear> -->

    <demo1></demo1>
  </div>
</template>

<script>
import demo1 from './components/demo1.vue'
// import HelloWorld from "./components/HelloWorld.vue";
// rom "./components/selectAll.vue";
// import hear from "./components/hear.vue";
export default {
  name: "App",
  components: {
    demo1
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
