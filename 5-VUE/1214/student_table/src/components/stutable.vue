<template>
  <div>
    <h1>组件1:表格</h1>
    <table border="1px">
      <thead>
        <th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>操作</th>
      </thead>

      <!-- BUG v-if 不能和v-for 一起用,但是v-if为false 的时候 tr 会占用页面宽高 -->
      <tr v-for="(item, index) in showList" :key="index">
        <td >{{ item.id }}</td>
        <td >{{ item.sname }}</td>
        <td >{{ item.age }}</td>
        <td >
          <button @click="delStu">删除</button
          ><button @click="preEdit(item)">修改</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "stutable",

  props: ["stuList"],

  data() {
    return {
      stu: {},
    };
  },
  methods: {
    delStu(e) {
      // 关键是如何找到数组里的对应元素,这里把id传了过去
      // console.log(e.target.parentNode.parentNode.rowIndex + 1);
      // this.$emit('del',e.target.parentNode.parentNode.rowIndex + 1)

      // let delIndex= Number.parse()

      let delIndex = Number.parseInt(
        e.target.parentNode.parentNode.firstChild.innerText
      );
      // console.log();
      this.$emit("delStu", delIndex);
    },

    preEdit(item) {
   
      // console.log();
      this.$emit("preEdit", item);
      // console.log(editIndex, editName, editAge);
      console.log(item);
    },
  },

  computed: {
    showList () {
      // console.log(this.stuList);

      return this.stuList.filter(item => {
        // 这个return 有没有 有什么区别呢?
        return item.sFlag;
      });
    },
  },
};
</script>