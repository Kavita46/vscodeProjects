<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
   -->

   <eat></eat>
   <change></change>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import eat from './components/eat.vue'
import change from './components/change.vue'
export default {
  name: 'App',
  components: {
   eat,
   change
  }
}
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
