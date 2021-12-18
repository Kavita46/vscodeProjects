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
let res = await this.$store.dispatch('getStudents');

  }
}
</script>

<style  scoped>

</style>
