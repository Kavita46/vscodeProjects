<template>
  <div>
    <input @keyup.enter="addNew" ref="newName" type="text" name="" id="" />

    <ol>
      <li
        :class="{ finish: item.isFinish }"
        @click="item.isFinish = !item.isFinish"
        v-for="(item, index) in filterList"
        :key="index"
      >
        {{ item.name }}
      </li>
    </ol>

    <div
      style="width: 20%; margin-left: 40%; margin-right: 40%"
      @click.prevent="changeIndex(index)"
      :class="{ active: index === current }"
      v-for="(item, index) in menuList"
      :key="index"
      href="#"
    >
      {{ item.name }}
    </div>

    <!-- <a :class="{active:index ==curent}" href="#">全部</a>
    <a href="#">未完成</a>
    <a href="#">已完成</a> -->
  </div>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {
      todoList: [
        { name: "Learn JavaScript", isFinish: false },
        { name: "Learn Vue", isFinish: false },
        { name: "Build something awesome", isFinish: false },
        { name: "Learn Vue", isFinish: false },
        { name: "Build something awesome", isFinish: false },
      ],
      menuList: [
        { name: "全部", index: 0 },
        { name: "未完成", index: 1 },
        { name: "已完成", index: 2 },
      ],
      newName: "",
      current: 0,
    };
  },
  methods: {
    addNew() {
      let name = this.$refs.newName.value;
      this.todoList.push({ name: name, isFinish: false });

      this.$refs.newName.value = "";
    },
    changeIndex(index) {
      this.current = index;
    },
  },

  computed: {
    filterList() {
      var result;
      if (this.current == 0) {
        result = this.todoList;
        console.log("返回了全部数组");
      } else if (this.current == 1) {
        console.log("返回了未完成数组");
        result = this.todoList.filter((item) => item.isFinish == false);
      } else if (this.current == 2) {
        console.log("返回了完成数组");
        result = this.todoList.filter((item) => item.isFinish);
      }
      return result;
      // XXX 为什么这里return必须写在外面
    },
  },
};
</script>

<style scoped>
a {
  margin-left: 20px;
}

.finish {
  color: red;

  /* 文字中间横线 */
  text-decoration: line-through;
}

a:visited {
  cursor: none;
  color: green;
}
.active {
  color: #333;
  background: cyan;
  /* color:aqua */
}
</style>