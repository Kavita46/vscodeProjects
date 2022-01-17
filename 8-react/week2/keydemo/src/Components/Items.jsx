import React, { Component } from 'react';

export default class Items extends React.Component {
    constructor(props) {
      super(props)
      this.state = {list: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']}
    }
    render() {
      let list = this.state.list
      return (
        <ul>
          {list.map((item, index) => (
            <li
              key={item}
              onClick={this.deleteItem.bind(this, index)}
              >
              {item}
            </li>
          ))}
        </ul>
      )
    }
    // 删除点击的item
    deleteItem(index) {
      let newlist = [...this.state.list]
      newlist.splice(index, 1)
      this.setState(()=>({list: newlist}))
    }
  }