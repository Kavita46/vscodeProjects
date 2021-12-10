<template>
  <div>
    <img :src="ListData[picIndex].src"  v-bind:style="{ width:widthNum + 'px' }" alt="" />
    <button @click="picIndex == 4 ? (picIndex = 0) : picIndex++">换图</button>
    <button @click="widthNum+=100 ">增加100px</button>
    <button @click="(widthNum!=0)?(widthNum-=100):(widthNum+=100)">减少100px</button>
    <br />
  </div>

  <!-- 换行标签 -->
</template>

<script>
export default {
  name: "demo1",
  data() {
    return {
      msg: "Hello Vue!",
      ListData: [
        { src: require("../assets/673.jpg"), name: "图1" },
        { src: require("../assets/674.jpg"), name: "图2" },
        { src: require("../assets/675.jpg"), name: "图3" },
        { src: require("../assets/676.jpg"), name: "图4" },
        { src: require("../assets/677.jpg"), name: "图5" },
      ],
      picIndex: 0,
      widthNum: 200
    };
  },
};

console.log("引入了demo1");
</script>

<style>
#s1 {
  color: pink;
}
</style>
