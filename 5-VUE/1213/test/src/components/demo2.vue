<template>
  <div>
    <table border="1px">
      <thead>
        <tr>
          <th><input type="checkbox" v-model="checkAll" />全选</th>
          <th>编号</th>
          <th>商品名</th>
          <th>单价</th>
          <th>数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody v-for="(item, index) in goods_arr" :key="index">
        <tr v-if="!item.count == 0 && item.isDeleted == false">
          <td>
            <input type="checkbox" v-model="item.isChecked" name="" id="" />
          </td>
          <td>{{ item._id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="minus(item)">-</button>
            {{ item.count }}
            <button @click="item.count++">+</button>
          </td>

          <td>{{ item.count * item.price }}</td>
          <td>
            <button
              @click="
                item.isDeleted = true;
                item.isChecked = false;
              "
            >
              删除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <span>共计 {{ totalNum }} 件商品,已选中 {{ selectNum }} 件商品</span>

    <br />
    <span>合计:{{ totalPrice }} 元</span>
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
        {
          _id: 1,
          name: "苹果",
          price: 4,
          count: 3,
          isChecked: true,
          isDeleted: false,
        },
        {
          _id: 2,
          name: "栗子",
          price: 7,
          count: 6,
          isChecked: true,
          isDeleted: false,
        },
        {
          _id: 3,
          name: "香蕉",
          price: 3,
          count: 1,
          isChecked: true,
          isDeleted: false,
        },
        {
          _id: 4,
          name: "黄桃",
          price: 14,
          count: 2,
          isChecked: true,
          isDeleted: false,
        },
        {
          _id: 5,
          name: "橙子",
          price: 24,
          count: 5,
          isChecked: true,
          isDeleted: false,
        },
      ],
    };
  },

  methods: {
    onClick(e) {
      console.log(this.goods_arr);
      console.log(e.target);
      e.currentTarget.parentNode.parentNode.remove();
    },
    minus(item) {
      item.count--;
      console.log(item.count);
      // console.log(e.currentTarget.parentNode.previousSibling);
      // if(e.currentTarget.parentNode.previousSibling.innerText=='0'){
      //     e.currentTarget.parentNode.parentNode.remove();

      // }
    },
  },

  computed: {
    checkAll: {
      get() {
        return this.goods_arr.every((item) => item.isChecked);
      },
      set(val) {
        this.goods_arr.forEach((item) => (item.isChecked = val));
      },
    },

    selectNum: function () {
      return this.goods_arr.filter((item) => item.isChecked).length;
    },

    totalNum: function () {
      return this.goods_arr.filter((item) => !item.isDeleted).length;
      // return this.goods_arr.length;
    },

    totalPrice: function () {
    //   var total = 0;
      var arr = this.goods_arr.filter(
        (item) => !item.isDeleted && item.isChecked
      );

    //   arr.forEach((item) => (total += item.count * item.price));

    //   return total;


      return arr.reduce((total,next)=>{
        return total += next.count* next.price
      },0)
      //   return arr.reduce((total, item) => {
      //     total + item.count * item.price;
      //   }, 0);
    },
  },
};
</script>