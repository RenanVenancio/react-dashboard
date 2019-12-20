import React, { Component } from 'react'
import './styles.css'

class Loader extends Component{
    state = {
        hide: false
    }

    destroy(){
        
    }

    render(){
        return(<div className="lds-dual-ring"></div>)
    }
}


export default Loader