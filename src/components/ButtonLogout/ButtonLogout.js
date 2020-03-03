import React from "react";
import { Redirect } from 'react-router-dom'

const ButtonLogout = () => {
  function logout() {
    if (window.confirm("Você realmente quer sair?")) {
      window.localStorage.removeItem("@sgo-token");
      
    }
  }

  return (
    <button className="btn btn-outline-danger" onClick={ ()=> logout() } >Sair</button>
  );
};

export default ButtonLogout;
