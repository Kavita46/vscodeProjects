<!-- 我的页面 -->
<template>
  <div >


      <table border = "1px ">
          <thead>
              <th>id</th>
              <th>姓名</th>
              <th>年龄</th>
              <th>地址</th>
              <th>爱好</th>
              <th>性别</th>
              <th>操作</th>

          </thead>

          <!-- <tr v-for = "iiem in list"></tr> -->
      </table>
  </div>
</template>

<script>

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  methods: {

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  activated () { }, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
}
</script>

<style  scoped>

</style>
