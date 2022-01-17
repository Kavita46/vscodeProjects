import React from 'react'
import Test from './Components/Test'
import TodoList from './Components/TodoList'


export default class App extends React.Component {


  state = {

    title: '蜗牛学苑',

    students: [{ id: 1, name: '张三', age: 12, isStudent: true }, { id: 2, name: '李四', age: 18, isStudent: false },

    { id: 3, name: '王五', age: 20, isStudent: true },

    { id: 4, name: '赵六', age: 22, isStudent: false }]
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')

    console.log(nextProps, nextState)

    return nextState.title !== this.state.title
    // return true
  }


  render() {
    return (
      <div>
        {/* <Test></Test> */}

        <TodoList></TodoList>
      </div>

    )
  }

  // shouldComponentUpdate(nextProps:Readonly<P>, nextState:Readonly<S></S>)




}