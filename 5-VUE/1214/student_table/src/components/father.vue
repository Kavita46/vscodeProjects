<template>
  <div>
    <stutable @preEdit="preEdit" @delStu="delStu" :stuList="stuList"></stutable>
    <add @add="addStu"></add>
    <!-- XXX @edit="editStu 暂时没用 -->
    <edit @update="update" :editInfo="editInfo"></edit>
    <search @search="searchStu"></search>
  </div>
</template>

<script>
import add from "./add.vue";
import edit from "./edit.vue";
import search from "./search.vue";
import stutable from "./stutable.vue";
export default {
  name: "father",
  components: {
    add,
    edit,
    search,
    stutable,
  },

  data() {
    return {
      stuList: [
        { id: 1, sname: "张飞", age: 18, sFlag: true },
        { id: 2, sname: "关羽", age: 19, sFlag: true },
        { id: 3, sname: "刘备", age: 20, sFlag: true },
        { id: 4, sname: "诸葛亮", age: 21, sFlag: true },
        { id: 5, sname: "赵云", age: 22, sFlag: true },
        { id: 6, sname: "马超", age: 23, sFlag: true },
        { id: 7, sname: "黄忠", age: 24, sFlag: true },
        { id: 8, sname: "孙权", age: 25, sFlag: true },
        { id: 9, sname: "周瑜", age: 26, sFlag: true },
        { id: 10, sname: "吕布", age: 27, sFlag: true },
      ],
      editInfo: {},
    };
  },

  methods: {
    addStu(stu) {
      console.log(stu);
      this.stuList.push({
        id: this.stuList.length + 1,
        sname: stu.newName,
        age: stu.newAge,
        sFlag: true,
      });
    },
    delStu(id) {
      this.stuList = this.stuList.filter((item) => item.id != id);
    },

    editStu(id, sname, age) {
      this.stuList = this.stuList.map((item) => {
        if (item.id == id) {
          item.sname = sname;
          item.age = age;
        }
        return item;
      });
    },

    // 表单里的修改点击之后渲染到文本框
    preEdit(item) {
      this.editInfo = item;

      console.log(item);
      console.log(item.sname);
      console.log(item.age);
      console.log(this.editInfo.sname);
    },

    update(stu) {

      console.log('father触发了更新');
      this.stuList.map((item, index) => {
        // console.log(item.id);

        if (item.id == stu.id) {
          // item = stu; 这句代码不能修改原数组
          this.stuList[index] = stu;
          console.log('匹配成功');
          console.log(item);

          console.log(this.stuList);
        }
      });
      // this.stuList.filter(item=>item.id==stu.id)
    },

    // 传过来的是搜索值 和 byName?byAge
    searchStu(searchVal, searchType) {
      console.log(searchVal, searchType);

      console.log("传过来的是" + searchVal + searchType);

      let regExp = new RegExp(searchVal);

      // 点击一次搜索就清空一次,再返回搜索的结果并渲染
      if (searchVal) {
        this.stuList.forEach((item) => {
          item.sFlag = false;
        });
      }

      if (searchType == "byName") {
        this.stuList.forEach((item) => {
          if (regExp.test(item.sname)) {
            item.sFlag = true;
          }
        });
      } else if (searchType == "byAge") {
        this.stuList.forEach((item) => {
          if (regExp.test(item.age.toString())) {
            item.sFlag = true;
          }
        });
      }
    },
  },
};
</script>