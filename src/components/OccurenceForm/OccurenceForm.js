import React, { Component } from 'react'
import api from '../../services/api'
import Loader from '../../components/Loader/Loader'
import ComboApartment from '../../components/ComboApartment/ComboApartment'
import ComboProblem from '../../components/ComboProblem/ComboProblem'
import ComboCommonArea from '../../components/ComboCommonArea/ComboCommonArea'
import { Redirect } from 'react-router-dom'
import { FaSave } from 'react-icons/fa';

class OccurenceForm extends Component {


    constructor(props){
        super(props)
        this.state = {
            id: null,
            apartamento: null,
            areaComum: null,
            categoriaProblema: null,
            dataCadastro: null,
            descricao: '',
            envolveAreaComum: false,
            feedbackUsuario: null,
            img: null,
            novosEventos: null,
            numChamadosAbertosHoje: null,
            protocolo: null,
            statusChamado: null,
            ultimo_evento: null,
            usuario: null,    
            redirect: false
       
        }
        this.loaderRef = React.createRef();
        this.state.id = this.props.id
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    async componentDidMount(){
        this.loadData();
    }

    loadData = async () => {
        if(this.state.id){
            await api.get(`/chamado/${this.state.id}`).then(response => {
                this.setState({ ...response.data })
                this.loaderRef.current.hide(true)
            })
        }else{
            console.log('NOVO')
        }
    }

    handleAdd = (evt) => {

    }

    submit = () => {
        console.log(this.state)

        const options = {
            headers: {'Content-Type': 'application/json' }
        }

        if(this.state.id){
            api.put(`/chamado/${this.state.id}/`, this.state, options).then(res =>{
                this.setState({redirect: true})
            })
        }
    }

    handleChange = (evt) => {
        console.log(evt.target.type);
        for(var i in this.state){
            if((evt.target.type === 'checkbox') && (i === evt.target.name)){
                this.setState({
                    [i]: evt.target.checked
                })
            }else if(!(evt.target.type === 'checkbox') && (i === evt.target.name)){
                this.setState({
                    [i]: evt.target.value
                })
            }
        }
        console.log(this.state);

    }

    render(){
        return(
            <div className="card mt-4">
                {this.state.redirect ? <Redirect to="/ocorrencia"/> : ''}
                <div className="card-header">
                    Protocolo: <strong>{ this.state.protocolo }</strong>
                </div>
                <div className="card-body">
                    <Loader ref={this.loaderRef} />
                    <form>
                        <div className="form-group row">
                            <label htmlFor="description">Ocorrência</label>
                            <textarea name="descricao" onChange={ this.handleChange } value={ this.state.descricao } rows="3" className="form-control" id="description" aria-describedby="emailHelp"></textarea>
                            <small id="emailHelp" className="form-text text-muted">Descreva sua ocorrência com detalhes.</small>
                        </div>
                        <div className="form-group row">
                            <ComboApartment onChange={ this.handleChange } atualSelected={ this.state.apartamento }/>
                        </div>
                        <div className="form-group row">
                            <ComboProblem onChange={ this.handleChange } atualSelected={ this.state.categoriaProblema }/>
                        </div>
                        <div className="form-group row">                              
                            <label className="switch-wrap" htmlFor="cbox">
                                <input name="envolveAreaComum" checked={ this.state.envolveAreaComum } onChange={ this.handleChange } type="checkbox" id="cbox"/>
                                <p className="check-text"></p>
                                <div className="switch"></div>
                            </label>
                        </div>
                        <div className="form-group row">
                            <ComboCommonArea onChange={ this.handleChange } atualSelected={ this.state.areaComum }/>
                        </div>

                        <div className="d-flex justify-content-start">
                        <button type="button" onClick={ this.submit } className="btn btn-primary">
                            <FaSave/> Salvar
                        </button>

                        </div>
                    </form>

                </div>

            </div>
        )
    }
}

export default OccurenceForm