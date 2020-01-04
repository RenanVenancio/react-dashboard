import React, { Component } from 'react'
import api from '../../services/api'
import Loader from '../../components/Loader/Loader'
import ComboApartment from '../../components/ComboApartment/ComboApartment'
import ComboProblem from '../../components/ComboProblem/ComboProblem'
import ComboCommonArea from '../../components/ComboCommonArea/ComboCommonArea'
import nophoto from '../../img/nophoto.svg'
import { Redirect } from 'react-router-dom'
import { FaSave } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from '../../services/auth'


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
            img: "",
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
        toast.configure()
        

    }

    async componentDidMount(){
        this.loadData();
    }

    loadData = async () => {
        if(this.state.id){
            await api.get(`/chamado/${this.state.id}`).then(response => {
                this.setState({ ...response.data })
                this.loaderRef.current.hide(true)
                
            }).catch(e => {
                console.log(Auth)
            })
        }else{
            this.loaderRef.current.hide(true)
        }
        console.log(this.state)
    }

    handleAdd = (evt) => {

    }

    submit = () => {
        const options = {
            headers: {'Content-Type': 'application/json' }
        }

        if(this.state.id){
            api.put(`/chamado/${this.state.id}/`, this.state, options).then(res =>{
                this.showAlert('Seu chamado foi alterado com sucesso!')
                this.setState({ redirect: true })
            })
        }else{
            api.post('/chamado/', 
            
            {
                "categoriaProblema": this.state.categoriaProblema,
                "envolveAreaComum": this.state.envolveAreaComum,
                "areaComum": this.state.areaComum,
                "apartamento": this.state.apartamento,
                "descricao": this.state.descricao,
                "img": this.state.img,
            }
            , options).then(res => {
                this.showAlert('Chamado registrado, em breve será analisado')
                this.setState({ redirect: true })
            })
            
        }
    }


    showAlert = (message) => {
        toast.success(message, {position: toast.POSITION.BOTTOM_RIGHT })
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
    }

    handleUploadPhoto = evt => {
        const options = {
            headers: {'Content-Type': 'application/json' }
        }
        console.log(evt.target.files[0]);
        const fd = new FormData()
        fd.append('img', evt.target.files[0], evt.target.files[0].name)
        api.post('/imagem/', fd, options).then(res => {
            console.log(res);
            this.setState({ img: res.data.img })
            console.log(this.state)
        })
    }

    render(){
        return(
            <div className="card mt-4 col-12">
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
                        <div className="form-group row">                              
                            <img className="mr-3" width="80px" alt="foto" src={ (this.state.img === '') ? nophoto : this.state.img }></img>
                            <div className="custom-file">
                                <input name="img" type="file" onChange={ this.handleUploadPhoto } className="custom-file-input" id="foto"
                                aria-describedby="inputGroupFileAddon01"/>
                                <label className="custom-file-label" htmlFor="foto">Enviar foto</label>
                            </div>
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