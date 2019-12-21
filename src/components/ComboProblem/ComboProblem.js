import React, { Component } from 'react'
import api from '../../services/api'

class ComboProblem extends Component {
    state = {
        data: [],
        selected: null
    }

    async componentDidMount() {
        await api.get('/listageralapartamentos').then(response =>{
            this.setState({ data: response.data })
            console.log(response.data)
            this.setState({ selected: this.props.atualSelected })
        })
        console.log(this.props)
    }

    render(){
        return(
            <React.Fragment>
                <label htmlFor="combo-aptos">Apartamento</label>
                <select className="form-control" id="combo-aptos" value={ this.state.selected }>
                    {
                        this.state.data.map(item =>(
                            <option key={ item.id } value={ item.id }>{ item.bloco.empreendimento.nomeEmpreendimento + ' BLOCO: ' + item.bloco.bloco + ' APTO: ' + item.apartamento }</option>
                        ))
                    }
                </select>
            </React.Fragment>
        )
    }
}

export default ComboProblem