import React , {Component} from 'react'
import Loadable from 'react-loadable'

function HOC(Comp){

    return class WrapperCom extends Component{

        render(){
            return (<Compo title = {"蜗牛学苑"}></Compo>)
        }
    }
}

class Header extends Component{
    render(){
        return (<div>
            标题:{this.props.title}
        </div>)
    }
}

export default HOC(Header)