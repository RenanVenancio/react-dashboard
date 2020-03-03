import React from "react";
import LoginBox from "../../components/LoginBox/LoginBox";
import "./styles.css";
import logo from "../../img/logo.png";

const Login = () => {
  return (
    <div className="login-box">
      <div className="col text-center mb-4">
        <img src={logo} width="128px"></img>
      </div>
      <LoginBox />
    </div>
  );
};

export default Login;
