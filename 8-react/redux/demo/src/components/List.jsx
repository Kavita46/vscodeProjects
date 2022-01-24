import React, { Component } from "react";
import store from "../store/index";
export default class List extends Component {


state={
    num:store.getState()
}

  showStore = () => {
   console.log(store.getState())
  };

  plus=()=>{
    store.dispatch({
      type:"add",
      num:1
    })
    console.log(store.getState())
    this.setState({
        num:store.getState()
    })
  }

  reduce = ()=>{
      store.dispatch({
          type:'reduce',
          num:1
      })
      console.log(store.getState())
      this.setState({
        num:store.getState()
    })
  }
  render() {
    return (
      <div className="App">
        姓名:xxx
        <br></br>
        <button onClick={this.showStore}>显示store</button>
        <br></br>
        数量:
        <button onClick={this.plus}>+</button>
        
        
        
        
     {this.state.num}
        
        <button onClick={this.reduce}>-</button>
      </div>
    );
  }
}
