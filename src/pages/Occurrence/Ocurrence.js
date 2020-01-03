import React from 'react'
import OccurenceList from '../../components/OccurenceList/OccurenceList'
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Occurence = () => {
    return(
        <div className="container mt-4">
            <div className="d-flex align-itens-start">
                <Link to="/ocorrencia/cadastro" className="btn btn-primary"><FaPlus className="btn-icon"/>Nova</Link>
            </div>
            <OccurenceList/>
        </div>
    )
}

export default Occurence