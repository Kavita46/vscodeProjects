import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    todoList: [
      { id: Number(1), name: "吃饭", isDone: false },
      { id: 2, name: "睡觉", isDone: false },
      { id: 3, name: "打豆豆", isDone: false },
      { id: 4, name: "购物", isDone: true },
    ],
  };

  addTodo = (e) => {
    e.preventDefault();
    let newTodo = {
      id: this.state.todoList.length + 1,
      name: this.input.value,
      isDone: false,
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo],
    });
    this.input.value = "";
  };

  changeItemDone = (e) => {
    console.log(e.target.checked);
    let cid = Number.parseInt(e.target.dataset.id);
    console.log(typeof cid);
    let newTodoList = this.state.todoList.map((item) => {
      if (item.id === cid) {
        item.isDone = e.target.checked;
      }
      return item;
    });
    this.setState({
      todoList: newTodoList,
    });
  };

  deleteItem = (e) => {
//    console.log(index)
  };

  render() {
    return (
      <div>
        <input
          placeholder="新的任务"
          ref={(input) => {
            this.input = input;
          }}
        />
        <button onClick={this.addTodo}>添加</button>

        <ul>
          {this.state.todoList.map((item, index) => {
            return (
              <li key={item.id}>
                {item.name}
                {item.isDone ? "是" : "否"}{" "}
                <input
                  data-id={item.id}
                  onChange={this.changeItemDone}
                  type="checkbox"
                  checked={item.isDone}
                ></input>
                <button value = {item.id} onClick={this.deleteItem}>删除</button>
              </li>
            );
          })}

          <button>全部完成</button>
          <button>全部未完成</button>
        </ul>
      </div>
    );
  }
}
