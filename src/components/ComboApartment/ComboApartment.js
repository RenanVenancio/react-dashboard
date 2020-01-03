import React, { Component } from 'react'
import api from '../../services/api'

class ComboApartment extends Component {
    state = {
        data: [],
        selected: undefined,
        lastSelected: undefined
    }

    async componentDidMount() {
        await api.get('/listageralapartamentos').then(response =>{
            this.setState({ 
                data: response.data
            })
        })
    }

    static getDerivedStateFromProps(props, state) {
        // props -> propiedades recebidas do pai
        // state -> estado atual do componente

        if (props.atualSelected && !state.lastSelected) {
            return ({
                selected: props.atualSelected
            })
        }else if(state.selected){
            return({ 
                selected: state.lastSelected
            })
        }else{
            return null 
        }
    }


    render(){
        return(
            <React.Fragment>
                <label htmlFor="combo-aptos">Apartamento</label>
                <select name="apartamento" className="form-control" id="combo-aptos" onChange={ this.props.onChange } value={ this.state.selected }>
                    <option value="">Selecione</option>
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