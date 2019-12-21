import React, { Component } from 'react'
import api from '../../services/api'

class ComboApartment extends Component {
    state = {
        data: [],
        selected: undefined
    }

    async componentDidMount() {
        await api.get('/listageralapartamentos').then(response =>{
            this.setState({ 
                data: response.data
            })
        })
        console.log(this.props)
    }

    componentWillReceiveProps(value){
        this.setState({ selected: value.atualSelected })
    }

    handleChange = (evt) =>{
        console.log(evt.target.value)
        this.setState({ selected: evt.target.value })
    }

    render(){
        return(
            <React.Fragment>
                <label htmlFor="combo-aptos">Apartamento</label>
                <select className="form-control" id="combo-aptos" onChange={ this.handleChange } value={ this.state.selected }>
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

export default ComboApartment