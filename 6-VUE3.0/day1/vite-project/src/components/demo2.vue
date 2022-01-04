<template>
  <div>
<h1>Demo2</h1>

<button></button>
  </div>
</template>

<script>

import {reactive} from "vue";
import {useRoute,useRouter} from "vue-router";


const route = useRoute();

console.log(route.query);
console.log(route);

</script>

<style>

</style>