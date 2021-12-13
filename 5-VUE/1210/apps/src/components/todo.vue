<template>
  <div>
    <h1>Todo List</h1>

    <!-- v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值而总是将 
        Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。 -->
    <input type="text" v-model="newTodo" />
    <button @click="addTodo">Add Todo</button>
    <ol>
      <li
        :class="{ complt: todo.completed == true }"
        v-for="todo in todos"
        :key="todo.title"
      >
        <input type="checkbox" v-model="todo.completed" />
        {{ todo.title }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "todo",

  data() {
    return {
      todos: [
        { title: "吃饭", completed: true },
        { title: "睡觉", completed: false },
        { title: "打豆豆", completed: false },
      ],
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
    },
  },
};
</script>

<style>
.complt {
  text-decoration: line-through;
}
</style>
