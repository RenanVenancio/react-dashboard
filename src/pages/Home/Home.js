import React from "react";
import Abstract from "../../components/Abstract/Abstract";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="login-box">
      <div className="row justify-content-center">
        <Abstract />
      </div>
      <Link to="/ocorrencia" className="btn btn-danger btn-sm mt-3">
        Registrar Ocorrência
      </Link>
    </div>
  );
};

export default Home;
