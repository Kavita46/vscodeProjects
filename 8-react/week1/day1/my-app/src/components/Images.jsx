import React, { Component } from 'react'
// const image = require('../assets/images/login-bg.jpg');

export default class Images extends Component {
    render() {
        return (
            <div>
                <img src={require('../assets/images/我的.png')} />
            </div>
        )
    }
}