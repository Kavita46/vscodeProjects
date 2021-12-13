<template>
  <div>
    <ul>
      <li>
        <input
          type="checkbox"
          @click="isClicked = !isClicked"
          :checked="isClicked || isAllChecked"
          v-model="isClicked"
        />
        全选
      </li>

      <li v-for="(item, index) in todoList" :key="index">
        <input
          v-model="item.checked"
        
          type="checkbox"
          value="item.title"
        />
        {{ item.title }}
      </li>

      isAllSelected:?
      {{
        isAllChecked
      }}
      <br />
      isTopClicked:?
      {{
        isClicked
      }}
    </ul>

    <!-- <input type="checkbox" v-model/>

    <input type="checkbox" />

    <input type="checkbox" /> -->
  </div>
</template>

<script>
export default {
  name: "selectAll",

  data() {
    return {
      todoList: [
        { title: "吃饭", checked: true },
        { title: "睡觉", checked: false },
        { title: "打豆豆", checked: false },
      ],
      isClicked: false,
    };
  },
  methods: {
    changeF() {},
  },

  computed: {
    get() {
      return this.todoList.every((item) => item.checked == true);
    },

 
  },
};
</script>
