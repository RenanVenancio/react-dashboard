import React, { Component } from 'react'
import api from '../../services/api'

class ComboProblem extends Component {
    state = {
        data: [],
        selected: undefined
    }

    async componentDidMount() {
        console.log(this.props.atualSelected )
        await api.get('/listarcategoriasdeproblema').then(response =>{
            this.setState({ data: response.data })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps)
        console.log(prevState)
        if (prevState.selected !== this.state.select) {
            this.setState({ selected: prevProps.selected })
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(prevState)
        console.log(nextProps)
        if(nextProps.atualSelected !== prevState.selected){
            console.log('mudou')
            return(nextProps )
        }else{
            console.log('!mudou')
            return null
        }
    }

  
    handleChange = (evt) =>{
        console.log('muda' + evt.target.value)
        this.setState({ selected: evt.target.value })
        console.log(this.state)
    }


    render(){
        console.log(this.state)
        return(
            <React.Fragment>
                <label htmlFor="combo-problem">Categoria do Problema</label>
                <select className="form-control" id="combo-problem" onChange={ this.handleChange } value={ this.state.selected }>
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