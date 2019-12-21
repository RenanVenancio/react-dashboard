import React, { Component } from 'react'
import api from '../../services/api'
import Loader from '../Loader/Loader'
import nophoto from '../../img/nophoto.svg'

class OccureceList extends Component {
    state = {
        data: [],
        search: ''
    }

    constructor(props){
        super(props)
        this.loaderRef = React.createRef();
    }

    componentDidMount(){
        this.loadData();
    }

    loadData = (param='') => {
        this.loaderRef.current.hide(false)
        api.get(`/listarchamados?search=${param}`).then(result =>{
            this.setState({ data: result.data })
            this.loaderRef.current.hide(true)
        })
    }

    updateSearchValue = (evt) => {
        this.setState({ search: evt.target.value })
    }

    search = (evt) =>{
        this.loadData(this.state.search)
        evt.preventDefault()
    }

    render(){
        return(
            <div className="container mt-4">
                <form onSubmit={ this.search }>
                    <div className="input-group mb-3">
                        <input onChange={ this.updateSearchValue } type="text" className="form-control" placeholder="Digite aqui..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Busca</button>
                        </div>
                    </div>
                </form>

                <div className="d-flex justify-content-center">
                    <Loader ref={this.loaderRef}/>
                </div>

                {
                    this.state.data.map(item =>(
                        <div key={ item.id } className="card mt-2">
                            <div className="card-header">
                                <div className="col-12">
                                    <div className="row d-flex justify-content-center">
                                        Protocolo: <strong> { item.protocolo }</strong>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <span className="badge badge-secondary">{ item.ultimo_evento.replace('#$%', ' - ') }</span>
                                    </div>

                                </div>
                            </div>
                            <div className="card-body">
                                <div className="media">                                   
                                    <img class="mr-3" width="80px" alt="foto" src={ (item.img == null) ? nophoto : item.img }></img>
                                    
                                    <div className="media-body">
                                        { item.descricao }
                                    </div>

                                </div>
                                <hr/>
                                <div className="row d-flex justify-content-center">
                                    <button className="btn btn-sm col-12 btn-primary">Abrir</button>
                                </div>
                            </div>
                        </div>                        
                    ))
                }
            </div>
        )
    }
}

export default OccureceList