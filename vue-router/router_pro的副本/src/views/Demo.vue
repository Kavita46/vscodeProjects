<!-- 我的页面 -->
<template>
  <div >

<span v-for='item in students' :key = 'item._id'>

    {{item.sname}}
    <br>
</span>

  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {

    }
  },
  computed: {
students(){
    return this.$store.state.students;
}

  },
  watch: {},
  methods: {

  },


  async created(){
    // 为什么不需要用await
this.$store.dispatch('getStudents');

// console.log('res是' + res);
  }
}
</script>

<style  scoped>

</style>
