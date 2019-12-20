import React, { Component, ReactDOM } from 'react'
import './styles.css'

class Loader extends Component{
    state = {
        hide: false
    }

    destroy(){
        this.setState({hide: true})
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