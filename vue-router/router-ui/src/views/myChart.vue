<!-- 我的页面 -->
<template>
  <div>
    <!-- 1-柱状图 -->
    <div id="main" style="width: 600px; height: 400px"></div>
    <!-- 2-饼状图 -->
    <div id="circle" style="width: 600px; height: 300px"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  components: {},
  data() {
    return {
      studentList: [],
      classList: [],
      // 饼状图数据容器
      circleData: [],
      // obj是柱状图数据容器
      obj: {
        xArray: [],
        yArray: [],
      },
      myChart: {},
      myCircle: {},
    };
  },
  computed: {},

  // 用watch, 可以监听数据的变化,否则第一次渲染出一个空的表格就不渲染了
  watch: {
    obj: {
      handler(newVal) {
        this.myChart.setOption({
          xAxis: {
            data: newVal.xArray,
          },
          series: [
            {
              data: newVal.yArray,
            },
          ],
        });
      },
      // BUG immediate是第一次绑定数据赋值的时候立即监听 这个时候created还没执行,没有myChart的方法
      // immediate: true,
      deep: true,
    },

    circleData: {
      handler(newVal) {
        this.myCircle.setOption({
          series: [
            {
              data: newVal,
            },
          ],
        });
      },
    },
  },
  methods: {},

  async created() {
    let res = await this.api.students.getStudents();
    this.studentList = res.result.filter((item) => item.flag == 1);

    // ****获得班级对应人数的算法****
    let obj = {};
    for (let i in this.studentList) {
      if (obj[this.studentList[i].cla_id.cname]) {
        obj[this.studentList[i].cla_id.cname]++;
      } else {
        obj[this.studentList[i].cla_id.cname] = 1;
      }
    }

    for (let j in obj) {
      this.circleData.push({ name: j, value: obj[j] });
    }
      // *****获得班级对应人数的算法****

    this.obj.xArray = this.studentList.map((item) => item.sname);
    this.obj.yArray = this.studentList.map((item) => item.age);
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById("main"));
    this.myChart.setOption({
      title: {
        text: "学生名字-年龄",
      },
      tooltip: {},
      xAxis: {
        data: [],
      },
      yAxis: {},
      series: [
        {
          name: "年龄",
          type: "bar",
          data: [],
        },
      ],
    });

    this.myCircle = echarts.init(document.getElementById("circle"));
    this.myCircle.setOption({
      title: {
        x: "center",
        y: "center",
        text: "班级-人数图",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          type: "pie",
          radius: "50%",
          data: [
          ],
        },
      ],
    });
  },
};
</script>

<style  scoped>
</style>
