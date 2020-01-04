import React from 'react'
import OccurenceForm from '../../components/OccurenceForm/OccurenceForm'

const OcurrenceDetail = (props) => {
    return(
        <div className="container">               
            <OccurenceForm id={ props.match.params.ID }/>
        </div>
    )
}

export default OcurrenceDetail
