<template>
  <div>
    你好Hello 这是HelloWorld

    {{ data.msg }}

    {{plusOne}}

    <button @click="show(3)">点击</button>
  </div>
</template>

<script setup>
import { reactive , computed,watch} from "vue";
const data = reactive({
  msg: "Hello Vue 3 + Vite",
  n1:30,
  n2:20
});

const show = function (n) {
  alert("点击了" + n);
};

// const sum =computed (()=>{
//   return data.n2 +data.n1;
// });

const plusOne = computed(() => data.n1 + 1)


</script>

<style>
</style>