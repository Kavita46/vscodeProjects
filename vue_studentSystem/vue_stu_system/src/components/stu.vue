<!-- 我的页面 -->
<template>
  <div >

<div id="stu">
    <div class="box1"></div>
    <div class="box2"></div>
</div>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {

  },
}
</script>

<style  scoped>

#stu .box{
display:flex;
}

#stu .box1{
    flex:1
}

#stu.box2{
    flex:3
}
</style>
