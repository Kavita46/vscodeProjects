<!-- 我的页面 -->
<template>
  <div>
    这是父亲的数据 {{ fatherName }}

    <syncSon :fatherName.sync="fatherName"></syncSon>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>

    <div>vuex 持久化的count是 {{ count }}</div>
  </div>
</template>

<script>
import store from "../../store/index";

import syncSon from "../student/stuSyncSon.vue";
export default {
  components: {
    syncSon,
  },
  data() {
    return {
      fatherName: "AvavaAva",
    };
  },
  computed: {
    count() {
      return store.state.count;
    },
  },
  watch: {},
  methods: {
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    },
  },

  //  increment() {
  //       store.commit('increment');
  //     },
  //     decrement() {
  //       store.commit('decrement');
  //     }
};
</script>

<style  scoped>
</style>
