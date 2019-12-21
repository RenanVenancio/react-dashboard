import React, { Component } from 'react'
import api from '../../services/api'
import Loader from '../../components/Loader/Loader'
import ComboApartment from '../../components/ComboApartment/ComboApartment'
import ComboProblem from '../../components/ComboProblem/ComboProblem'


class OccurenceForm extends Component {
    state = {
        id: null,
        data: []
    }

    constructor(props){
        super(props)
        this.loaderRef = React.createRef();
        this.state.id = this.props.id
    }

    async componentDidMount(){
        if(this.state.id){
            await api.get(`/chamado/${this.state.id}`).then(response => {
                this.setState({ data: response.data })
                this.loaderRef.current.hide(true)
                //this.comboApartmentRef.current.setSelected(this.state.data.apartamento)
                console.log(response.data)
            })
        }else{
            console.log('NOVO')
        }
    }

    render(){
        return(
            <div className="card mt-4">
                <div className="card-header">
                    Protocolo: <strong>{ this.state.data.protocolo }</strong>
                </div>
                <div className="card-body">
                    <Loader ref={this.loaderRef} selected={ this.state.data.apartamento } />
                    <form>
                        <div className="form-group row">
                            <label htmlFor="exampleInputEmail1">Ocorrência</label>
                            <textarea value={ this.state.data.descricao } rows="3" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
                            <small id="emailHelp" className="form-text text-muted">Descreva sua ocorrência com detalhes.</small>
                        </div>
                        <div className="form-group row">
                            <ComboApartment atualSelected={ this.state.data.apartamento }/>
                        </div>
                        <div className="form-group row">
                            <ComboProblem atualSelected={ this.state.data.categoriaProblema }/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>

            </div>
        )
    }
}

export default OccurenceForm