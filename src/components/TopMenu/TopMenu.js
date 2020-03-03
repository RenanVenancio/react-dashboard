import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import ButtonLogout from '../ButtonLogout/ButtonLogout'

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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <Link to="/" className="navbar-brand"><strong>SGO</strong><small> Gerencia de Ocorrências</small></Link>
                <ButtonLogout/>
            </nav>
        )
    }
}

export default TopMenu