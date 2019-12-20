import React, { Component } from 'react'
import api from '../../services/api'

class TopMenu extends Component {
    
    state = {
        length: []
    }

    async componentDidMount(){
        const result = await api.get('/listarchamados?search=analise')
        this.setState({length: result.data.length})
        console.log(this.state)
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/" className="navbar-brand">DASH</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        )
    }
}

export default TopMenu