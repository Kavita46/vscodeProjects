<!-- 我的页面 -->
<template>
  <div>
    {{ list }}

    <table border="1px">
      <tr v-for="item,index in list" :key="index">
        <td>{{ item.name }}</td>
      </tr>
    </table>
    <button @click="addkey">更改key</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menukey: 1,

      list: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    addkey() {
      // this.key++;

      this.list.pop();
    },
  },

  beforeCreate() {},

  created() {
    this.list = [
      { name: "a", flag: 1 },

      { name: "b", flag: 1 },

      { name: "c", flag: 1 },

      { name: "d", flag: 1 },
      { name: "e", flag: 1 },
    ];
  },
};
</script>

<style  scoped>
</style>
