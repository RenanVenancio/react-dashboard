import React from "react"
import LoginBox from '../../components/LoginBox/LoginBox'
import './styles.css'

const Login = () => {
    return(
        <div className="login-box">
            <h1>SGO</h1>
            <small>Entre com seu login e senha</small>
            <LoginBox />
        </div>
    )
}

export default Login