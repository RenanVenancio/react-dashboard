import React, { Component } from 'react'
import api from '../../services/api'

class ComboProblem extends Component {
    state = {
        data: [],
        lastSelected: undefined,
        selected: undefined
    }

    async componentDidMount() {
        this.loadData()

    }

    loadData = async () =>{
        if(this.state.data.length === 0){
            await api.get('/listarcategoriasdeproblema').then(response =>{
                this.setState({ data: response.data })
            })
        }
    }

    handleChange = (evt) =>{
        this.setState({ lastSelected: evt.target.value })
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
                <label htmlFor="combo-problem">Categoria do Problema</label>
                <select name="categoriaProblema" className="form-control" id="combo-problem" onChange={ this.props.onChange } value={ this.state.selected }>
                    {
                        this.state.data.map(item =>(
                            <option key={ item.id } value={ item.id }>{ item.nomeCategoria }</option>
                        ))
                    }
                </select>
            </React.Fragment>
        )
    }
}

export default ComboProblem