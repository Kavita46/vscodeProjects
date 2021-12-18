<template>
<div>


<father></father>

<parent></parent>

<demo_axios></demo_axios>
  </div>
</template>

<script>
import father from './components/father.vue'
import demo_axios from './components/demo_axios.vue'

// import parent from './components/parent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    father,
    demo_axios
    // parent
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
