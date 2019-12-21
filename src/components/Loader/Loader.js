import React, { Component } from 'react'
import './styles.css'

class Loader extends Component{
    state = {
        hide: false
    }

    hide(param){
        this.setState({hide: param})
    }

    render(){
        if(this.state.hide){
            return null
        }else{
            return(
                <div>
                    <div className="lds-dual-ring"></div>
                    <small>aguarde</small>
                </div>
                )
        }
    }
}


export default Loader