import React, { Component } from 'react'
import api from '../../services/api'

class ComboProblem extends Component {
    state = {
        data: [],
        selected: undefined
    }

    async componentDidMount() {
        await api.get('/listarcategoriasdeproblema').then(response =>{
            this.setState({
                data: response.data,
                selected: this.props.atualSelected 
            })
        })
    }


    handleChange = (evt) =>{
        console.log(evt.target.value)
    }


    render(){
        return(
            <React.Fragment>
                <label htmlFor="combo-problem">Categoria do Problema</label>
                <select className="form-control" id="combo-problem" value={ this.state.selected }>
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