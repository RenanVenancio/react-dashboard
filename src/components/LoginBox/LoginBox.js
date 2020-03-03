import React, { Component } from 'react'
import apiAuth from '../../services/apiAuth'
import { Redirect } from 'react-router-dom'
import './styles.css'
 
class LoginBox extends Component {

    state = {
        username: '',
        password: '',
        redirect: false
    }

    submit =(evt) => {
        evt.preventDefault();

        const options = {
            headers: {'Content-Type': 'application/json' }
        }
        apiAuth.post('/obter-token/', this.state, options).then(res => {
            window.localStorage.setItem('@sgo-token', res.data.token);
            this.setState({ 
                redirect: true 
            })
        }).catch(e => {
            alert("Usuário ou senha inválidos")
        })
    }

    handleChange = (evt) => {
        console.log(evt.target.name)
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Entre com seu Usuário e Senha
                </div>
                <div className="card-body">
                    { this.state.redirect ? <Redirect to="/"/> : null }
                    <form onSubmit={ this.submit }>
                        <div className="form-group row">
                            <label htmlFor="user">Usuário</label>
                            <input name="username" onChange={ this.handleChange } value={ this.state.username } className="form-control" id="usuario" aria-describedby="usuario"></input>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="password"  onChange={ this.handleChange } value={ this.state.password }  className="form-control" id="senha" aria-describedby="senha"></input>
                        </div>
                        <div className="form-group row">
                            <button className="btn btn-outline-danger col-12" type="submit" onClick={ this.submit }>Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginBox