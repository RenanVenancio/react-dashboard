import React from 'react'
import Abstract from '../../components/Abstract/Abstract'
import { Link } from 'react-router-dom'
import Auth from '../../services/auth'
const Home = () => {
        return(
            <React.Fragment>
                <Abstract/>
                <Link to="/ocorrencia" className="btn btn-danger btn-sm mt-3">Registrar Ocorrência</Link>
            </React.Fragment>

        )
    }

export default Home