<template>
  <div>
    <!-- 对于不同类型的input, v-model绑定的不一样 -->

    <ul>
      <li>全选: <input type="checkbox" v-model="qx" /></li>

      <li v-for="(item, index) in todoList" :key="index">
        <input type="checkbox" v-model="item.checked" />
        {{ item.title }}
      </li>
    </ul>

    <!-- 吃饭 <input type="checkbox" v-model="h1" /> 睡觉
    <input type="checkbox" v-model="h2" /> 打豆豆
    <input type="checkbox" v-model="h3" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [
        { title: "吃饭", checked: true },
        { title: "睡觉", checked: false },
        { title: "打豆豆", checked: false },
      ],
    };
  },
  computed: {
    qx: {
      get() {
          return this.todoList.every(item => item.checked);
        // return this.h1 && this.h2 && this.h3;
      },
      set(val) {

          this.todoList.forEach(item => {
            item.checked = val;
          });
        // this.h1 = val;
        // this.h2 = val;
        // this.h3 = val;
      },
    },
  },
};
</script>