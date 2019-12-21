import React, { Component } from 'react'
import api from '../../services/api'
import OccurenceList from '../../components/OccurenceList/OccurenceList'

class Occurence extends Component {
    state = {
        data: []
    }

    async componentDidMount(){
        api.get('/chamado').then((result)=>{
            console.log(result)
        })
    }

    render(){
        return(
            <React.Fragment>
                <OccurenceList/>
            </React.Fragment>
        )
    }
}

export default Occurence