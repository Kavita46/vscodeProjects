import React, { Component } from "react";
import store from "../store/index";
import { Provider } from "react-redux";
export default class List extends Component {
  state = {
    num: store.getState().count,
  };

  showStore = () => {
    console.log(store.getState());
  };

  plus = () => {
    store.dispatch({
      type: "add",
      num: 1,
      user: "王五",
    });
    console.log(store.getState());
    this.setState({
      num: store.getState(),
    });
  };

  reduce = () => {
    store.dispatch({
      type: "reduce",
      num: 1,
    });
    console.log(store.getState());
    this.setState({
      num: store.getState(),
    });
  };
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          姓名:xxx
          <br></br>
          <button onClick={this.showStore}>显示store</button>
          <br></br>
          数量:
          <button onClick={this.plus}>+</button>
          {this.state.count}
          <button onClick={this.reduce}>-</button>
        </div>
      </Provider>
    );
  }
}
