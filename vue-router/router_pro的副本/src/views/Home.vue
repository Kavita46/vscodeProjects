<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />

    {{ this.$store.state.name }}
    {{ this.$store.state.age }}

<button @click='increasePay'>涨工资</button>
    总工资是 {{ sum }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },

  computed: {
    sum() {
      return this.$store.getters.sum;
    },
  },

  methods:{
    increasePay(){
      this.$store.commit('INCREASE_MONEY', 1);
    },
  },
  
};
</script>
