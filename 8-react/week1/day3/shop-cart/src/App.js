import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import './shop.css'

export default class App extends Component {
  state = {
    goodsList: [{ id: 1, name: '羊腿肉', price: 120, img: '/model1.jpg', count: 1 },
    { id: 2, name: '羊羔肉', price: 200, img: '/model2.jpg', count: 0 },
    { id: 3, name: '香煎羊排', price: 300, img: '/model4.jpg', count: 0 },
    { id: 4, name: '西冷牛排', price: 400, img: '/model3.jpg', count: 0 },
    ],
    totalPrice: 0,
  }



  getTotalprice() {
    let totalPrice = this.state.goodsList.reduce((pre, item) => {
      return pre + item.price * item.count
    }, 0)
    return totalPrice
  }


  addItem = (item) => {
    console.log(item.target.value)
    // let AddId = Number.parseInt(item.target.value);
    // console.log(this.state.goodsList[item.target.value])

    console.log(this.state.goodsList[item.target.value])
    this.state.goodsList[item.target.value].count = this.state.goodsList[item.target.value].count + 1;
    console.log(this.state.goodsList[item.target.value])
    // XXX意思是出了这个函数之外, 等号赋值就不会改变实际state的值, 只是改变了视图的值?
    this.setState({
      goodsList: this.state.goodsList
    })
  }

  deleteItem = (item) => {
    console.log(item.target.value)
    console.log(this.state.goodsList[item.target.value])
    this.state.goodsList[item.target.value].count = 0;
    console.log(this.state.goodsList[item.target.value])
    // XXX意思是出了这个函数之外, 等号赋值就不会改变实际state的值, 只是改变了视图的值?
    this.setState({
      goodsList: this.state.goodsList
    })
  }



  decreItem = (item) => {
    console.log(item.target.value)
    // let AddId = Number.parseInt(item.target.value);
    // console.log(this.state.goodsList[item.target.value])

    console.log(this.state.goodsList[item.target.value])
    this.state.goodsList[item.target.value].count = this.state.goodsList[item.target.value].count - 1;
    console.log(this.state.goodsList[item.target.value])
    // XXX意思是出了这个函数之外, 等号赋值就不会改变实际state的值, 只是改变了视图的值?
    this.setState({
      goodsList: this.state.goodsList
    })
  }



  render() {
    return (
      <div>
        <h1>产品</h1>
        <div className='container'>
          <div className="list">
            {
              this.state.goodsList.map((item, index) => {
                return <div className="item" key={item.id}>
                  <img src={require('./Assets/Images' + item.img)} alt="" />
                  <p>{item.name}</p>
                  <button value={index} onClick={this.addItem}>添加到购物车</button>
                </div>
              })}
          </div>

          <table className="mytable" border='1px'>
            <thead>
              <tr>
                <td>编号</td>
                <td>图片</td>
                <td>标题</td>
                <td>价格</td>
                <td>数量</td>
                <td>操作</td>
                <td>小计</td>
              </tr>
            </thead>
            <tbody>
              {
                this.state.goodsList.map((item, index) => {

                  if (item.count > 0) {
                    return <tr key={item.id}>
                      <td>{item.id}</td>
                      <td><img style={{ width: '60px', height: '60rpx' }} src={require('./Assets/Images' + item.img)} alt="" /></td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td><button value={index} onClick={this.decreItem} >-</button>{item.count}<button value={index} onClick={this.addItem}>+</button></td>
                      <td><button value={index} onClick={this.deleteItem}>删除</button></td>
                      <td>{item.count * item.price}</td>
                    </tr>
                  }
                })
              }
            </tbody>
          </table>


          <h2>总价格:{this.getTotalprice()}</h2>
        </div>
      </div>



    );
  }

}

