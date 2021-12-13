<template>
  <div>
    <div id="btns">

      <button @click="changeIndex(index)" v-for = "(item, index) in menuList" :key = "index">{{item.name}}</button>
   
    </div>
    <table border="1px">
      <thead>
        <th>编号</th>
        <th>书名</th>
        <th>状态</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filterList" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.title }}</td>
          <td v-if="item.isBorrowed" style="color: red">借出</td>
          <td v-if="!item.isBorrowed">在架</td>
          <td>
            <button
              v-if="!item.isBorrowed"
              @click="item.isBorrowed = !item.isBorrowed"
            >
              借阅
            </button>
            <button
              v-if="item.isBorrowed"
              @click="item.isBorrowed = !item.isBorrowed"
            >
              归还
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "mylibrary",

  data() {
    return {
      bookList: [
        {
          id: 1,
          title: "The Lord of the Rings",
          isBorrowed: false,
        },

        {
          id: 2,
          title: "The Hobbit",
          isBorrowed: false,
        },

        {
          id: 3,
          title: "The Catcher in the Rye",
          isBorrowed: false,
        },

        {
          id: 4,
          title: "The Hunger Games",
          isBorrowed: false,
        },

        {
          id: 5,
          title: "The Fault in Our Stars",
          isBorrowed: false,
        },
      ],
      menuList:[
          { name: "全部", index: 0 },
        { name: "在架上", index: 1 },
        { name: "已借出", index: 2 },
      ],
      // 全局写在return里面
        current: 0,
    };
  },

  methods: {
    changeIndex(index) {
      this.current = index;
      console.log(index);
    },
  },

  computed: {
    filterList() {
      var result;
      if (this.current == 0) {
        result = this.bookList;
        console.log("返回了全部数组");
      } else if (this.current == 1) {
        console.log("返回了未完成数组");
        result = this.bookList.filter((item) => item.isBorrowed == false);
      } else if (this.current == 2) {
        console.log("返回了完成数组");
        result = this.bookList.filter((item) => item.isBorrowed);
      }
      return result;
    },
  },
};
</script>

<style scoped>
#btns {
  width: 300px;
}
</style>
