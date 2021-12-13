<template>

<div>
 <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

<demo1></demo1>
<todo></todo>

<mylibrary></mylibrary>
</div>
 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import demo1 from './components/demo1.vue'
import todo from  './components/todo.vue'
import mylibrary from './components/mylibrary.vue'


export default {
  name: 'App',
  components: {
    todo,
    // HelloWorld
    demo1,
    mylibrary,
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
