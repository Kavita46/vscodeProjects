import React, { Component } from 'react'
export default class PropsClass extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                标题：{this.props.title}
            </div>
        )
    }
}