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
      <tr v-for="(item, index) in stuList" :key="index">
        <td v-if="item.sFlag">{{ item.id }}</td>
        <td v-if="item.sFlag">{{ item.sname }}</td>
        <td v-if="item.sFlag">{{ item.age }}</td>
        <td v-if="item.sFlag">
          <button @click="delStu">删除</button
          ><button @click="preEdit">修改</button>
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

    preEdit(e) {
      // console.log(item.id);
      // console.log(this.stu);
      let editIndex = Number.parseInt(
        e.target.parentNode.parentNode.firstChild.innerText
      );

      let editName = e.target.parentNode.parentNode.children[1].innerText;
      let editAge = Number.parseInt(
        e.target.parentNode.parentNode.children[2].innerText
      );
      // console.log();
      this.$emit("preEdit", editIndex);
      console.log(editIndex, editName, editAge);
    },
  },
};
</script>