<template>
  <div>
    <table border="1px">
      <thead>
        <tr>
          <th>编号</th>
          <th>商品名</th>
          <th>单价</th>
          <th>数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody  v-for="(item, index) in goods_arr" :key="index">
        <tr v-if="!item.count==0" >
          <td >{{ item._id }}</td>
          <td >{{ item.name }}</td>
          <td >{{ item.price }}</td>
          <td >
            <button @click=" minus(item)">-</button>
            {{ item.count }}
            <button @click="item.count++">+</button>
          </td>

          <td >{{ item.count * item.price }}</td>
          <td ><button @click="onClick($event)">删除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      isShow: true,
      cart: [],
      goods_arr: [
        { _id: 1, name: "苹果", price: 4, count: 3 },
        { _id: 2, name: "栗子", price: 7, count: 6 },
        { _id: 3, name: "香蕉", price: 3, count: 1 },
        { _id: 4, name: "黄桃", price: 14, count: 2 },
        { _id: 5, name: "橙子", price: 24, count: 5 },
      ],
    };
  },

  methods: {
    onClick(e) {
      console.log(e.target);
      e.currentTarget.parentNode.parentNode.remove();
    },
    minus(item){

        item.count--;
        console.log(item.count);
        // console.log(e.currentTarget.parentNode.previousSibling);
        // if(e.currentTarget.parentNode.previousSibling.innerText=='0'){
        //     e.currentTarget.parentNode.parentNode.remove();

        // }
    }

  },
};
</script>

<style></style>
