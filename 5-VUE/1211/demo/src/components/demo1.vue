<template>
  <div>
    <div id="search">
    <span>名字模糊查询:</span>
    <input type="text" ref="name" id="" />

    <button @click="searchByName">搜索</button>
    <br />

    <span>年龄查询</span>
    <input type="text" ref="age1" id="" />
    ~
    <input type="text" name="" ref="age2" id="" />
    <button @click="searchByAge">搜索</button>
    <br />
    性别
    <input
      @change="gender = '男'"
      type="radio"
      name="gender"
      id=""
      value="男"
      ref="gender"
    />男
    <input
      @change="gender = '女'"
      type="radio"
      name="gender"
      id=""
      value="女"
      ref="gender"
    />女

    <button @click="searchByGender">搜索</button>
    <!-- <input type="checkbox" name="" id=""> -->
</div>

    <table border="1px">
      <thead>
        <th>学号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
      </thead>
      <tbody>
        <tr v-for="item in getResult" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "demo1",
  data() {
    return {
      stuList: [
        {
          id: 1,
          name: "张飞",
          age: 28,
          gender: "男",
        },
        {
          id: 2,
          name: "荀彧",
          age: 38,
          gender: "男",
        },
        {
          id: 3,
          name: "华佗",
          age: 48,
          gender: "女",
        },
        {
          id: 4,
          name: "黄月英",
          age: 58,
          gender: "女",
        },
        {
          id: 5,
          name: "马超",
          age: 58,
          gender: "男",
        },
        {
          id: 6,
          name: "黄忠",
          age: 57,
          gender: "男",
        },
        {
          id: 7,
          name: "马克",
          age: 31,
          gender: "女",
        },
        {
          id: 8,
          name: "艾米丽",
          age: 82,
          gender: "女",
        },
      ],
      name: "",
      age1: "",
      age2: "",
      gender: "",
      type: 0,
    };
  },

  methods: {
    searchByName() {
      let name = this.$refs.name.value;
      //   console.log(key);
      this.type = 1;
      this.name = name;
    },
    searchByAge() {
      //   let name = this.$refs.name.value;
      let age1 = this.$refs.age1.value;
      let age2 = this.$refs.age2.value;

      this.age1 = age1;
      this.age2 = age2;
      //   console.log(key);
      this.type = 2;
      this.name = name;
    },
    searchByGender() {
      let gender = this.$refs.gender.value;
      this.type = 3;
      this.gender = gender;
    },
  },

  computed: {
    getResult() {
      var result;
      switch (this.type) {
        case 0:
          result = this.stuList;
          console.log(result);
          console.log();
          break;

        case 1:
          result = this.stuList.filter((item) => item.name.includes(this.name));
          break;
        case 2:
          if (this.age1 != "" && this.age2 != "") {
            result = this.stuList.filter(
              (item) => item.age >= this.age1 && item.age <= this.age2
            );
          }else{
              alert("请输入年龄在查询一下")
          }

          break;

        case 3:
          result = this.stuList.filter((item) => {
            item.gender == this.gender;
          });
          break;
      }

      return result;
    },
  },
};

// computed;
</script>


<style scoped>

</style>
