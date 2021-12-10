<template>
  <div>
    <span>钱的数量是:{{ money }} </span>
    <br />

    <button @click="showFood">爆金币</button>

    <span>吃什么:{{ food }}</span>
    <br />

    <div
      @click="changeIndex(index)"
      class="tag"
      :class="{ active: index == current }"
      v-for="(item, index) in list"
      :key="index"
    >
      {{ item }}
    </div>

    <!-- <ul  v-for="item in list"
    :key="item">
      <li
        :style="{ background, color }"
      
        @click="color = 'red'"
      >
        {{ item }}
      </li>
    </ul> -->

    <div>
      <table border="1px">
        <thead>
          <td>学号</td>
          <td>姓名</td>
          <td>年龄</td>
          <td>性别</td>
        </thead>
        <tr v-for="(item, index) in stuList" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
        </tr>
      </table>

      <button @click="stuList = listComputed"> 筛选</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "eat",
  data() {
    return {
      text1 :"(item, index) in listComputed",
      text2: "(item, index) in stuList",
      current: 0,
      color: "",
      money: 0,
      food: "",
      list: ["军事", "历史", "儿童", "娱乐", "美食", "摄影", "旅游"],
      stuList: [
        { id: 1, name: "张飞", age: 28, gender: "男" },
        { id: 2, name: "刘备", age: 60, gender: "男" },
        { id: 3, name: "黄月英", age: 50, gender: "女" },
        { id: 4, name: "华佗", age: 66, gender: "男" },
        { id: 5, name: "陆逊", age: 33, gender: "男" },
      ],
    };
  },
  computed: {
    listComputed: function () {
      return this.stuList.filter(function (item) {
        return item.age >= 40;
      });
    },
  },
  methods: {
    showFood() {
      this.money++;
      this.money < 3
        ? (this.food = "不吃")
        : this.money >= 3 && this.money <= 5
        ? (this.food = "吃面")
        : this.money <= 7 && this.money > 5
        ? (this.food = "吃饭")
        : (this.food = "吃火锅");
    },
    changeIndex(index) {
      this.current = index;
    },
  },
};
</script>

<style scoped>
ul {
  display: inline-block;
  list-style: none;
  padding: 0;
}

li {
  display: inline-block;
  margin-right: 10px;
  border: 1px solid #ccc;
  padding: 5px;
}

.tag {
  margin-right: 10px;
  display: inline-block;
  border: 1px solid #ccc;
  padding: 5px;
}

.active {
  background-color: red;
}
</style>
