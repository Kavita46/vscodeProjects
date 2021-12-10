<template>
  <div>
    <div
      v-bind:style="{textAlign: 'center',fontSize:'30px', width: width, height: height, background: colorList[i] }"
      @click="i != 5 ? i++ : (i = 0)"
    >
    {{i}}</div>
<br>
    <div
      v-bind:style="{textAlign: 'center',fontSize:'30px', borderRadius:'20px', width: width, height: height, background: colorList[j] }"
      @click="j = Math.ceil(Math.random() * 5)"
    >
{{j}}
</div>

<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>
</template>

<script>
var i = Math.random(5);
console.log(i);

import son from "./son/son.vue";
export default {
  components: {
    son,
  },
  data() {
    return {
      msg: "hello",
      width: "100px",
      height: "100px",
      colorList: ["red", "orange", "yellow", "green", "blue", "purple"],
      i: 0,
      j:0,
      rawHtml:"<span style = 'color:red'>This Should be red span</span>"
    };
  },
};
</script>

<style>
#s2 {
  color: cyan;
}
</style>
