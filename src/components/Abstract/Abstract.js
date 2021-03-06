import React, { Component } from 'react'
import api from '../../services/api'
import Loader from '../Loader/Loader'

class Abstract extends Component{
    state ={
        data: []
    }

    constructor(props){
        super(props)
        this.loaderRef = React.createRef();
    }

    async componentDidMount(){
        api.get('/listageralapartamentos').then((response)=>{
            this.setState({data: response.data})
            this.loaderRef.current.hide(true)
        })

        console.log(this.state)
    }

    render(){
        return(
            <div className="card w-100">
                <div className="card-header">
                    Seus Apartamentos
                </div>
                <ul className="list-group list-group-flus">
                    <div className="d-flex justify-content-center">
                        <Loader ref={this.loaderRef}/>
                    </div>
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