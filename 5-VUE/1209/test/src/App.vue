<template>
  <div>
    <demo1> </demo1>

    <demo2></demo2>

 <div>
      <h1>{{ n1 }} + {{ n2 }} = {{ n3 }}</h1>
      <br />
      <button @click="(n1 += 1), (n3 = n1 + n2)">n1 增加</button>

      <button @click="(n2 += 1), (n3 = n1 + n2)">n2 增加</button>
      <br />
      <button @click="(n1 -= 1), (n3 = n1 + n2)">n1 减少</button>
      <button @click="(n2 -= 1), (n3 = n1 + n2)">n2 减少</button>

      <h2>性别:{{ gender }}</h2>
      <br />
      <button
        @click="
          (gender = gender == '男' ? '女' : '男'),
            (btn_val = btn_val == '变女' ? '变男' : '变女')
        "
      >
        {{ btn_val }}
      </button>

      <h3 v-text="text">指令</h3>

      <h4 :style="{ color, color }">样式</h4>
    </div> 
  </div>
</template>

<script>
import test from "./components/test.vue";
import demo1 from "./components/demo1.vue";
import demo2 from "./components/demo2.vue";

let n1 = 1;
let n2 = 1;
let n3 = n1 + n2;
export default {
  components: {
    test: test,
    demo1: demo1,
    demo2: demo2,
  },

  data() {
    return {
      color: "blue",
      n1: n1,
      n2: n2,
      n3: n3,
      gender: "男",
      btn_val: "变女",
      text: "v指令",
    };
  },
};
</script>

<style></style>
