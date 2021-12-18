<template>
  <div>
    <h1>查询</h1>

    <select v-model = "searchType" name="" id="">
      <option value="byName">姓名</option>
      <option value="byAge">年龄</option>
    </select>
    <input v-model = "searchVal" type="text" />

    <button @click="searchStu">模糊搜索</button>
  </div>
</template>

<script>
export default {
  name: "search",

  data() {
    return {
      searchVal: "",

      // 0按姓名, 1 按年龄
      searchType: 'byName',
    };
  },

  // props:['stuList'],

  methods: {
    searchStu(){
        // this.$emit('search',this.$refs.search.value)
        this.$emit('search', this.searchVal,this.searchType);


    }
  },
};
</script>


