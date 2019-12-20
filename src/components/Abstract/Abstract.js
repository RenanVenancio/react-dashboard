import React, { Component } from 'react'
import { directive } from '@babel/types'
import api from '../../services/api'

class Abstract extends Component{
    state ={
        data: []
    }
    constructor(props){
        super(props)
    }

    async componentDidMount(){
        const result = await api.get('/listageralapartamentos')
        console.log(result)
        this.setState({data: result.data})
        console.log(this.state)
    }

    render(){
        return(
            <div className="card mt-4">
                <div className="card-header">
                    Seus Apartamentos
                </div>
                <ul className="list-group list-group-flush">
                    {
                        this.state.data.map(item =>(
                            <li key={item.id} className="list-group-item">{item.bloco.empreendimento.nomeEmpreendimento + ' - BLOCO:' + item.bloco.bloco + ' - AP:' + item.apartamento }</li>
                        ))
                    }

                </ul>             
            </div>
        )
    }
}

export default Abstract