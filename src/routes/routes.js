import React from 'react'
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Occurence from '../pages/Occurrence/Ocurrence'
import TopMenu from '../components/TopMenu/TopMenu'
import OccurenceDetail from '../pages/OccurrenceDetail/OccurenceDetail'
import Login from '../pages/Login/Login'


const Routes = () =>{
    return(
        <BrowserRouter>
        <TopMenu/>
        <div className="container">
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route exact path='/ocorrencia' component={ Occurence }/>
                <Route exact path='/ocorrencia/cadastro/:ID' component={ OccurenceDetail }/>
                <Route exact path='/ocorrencia/cadastro/' component={ OccurenceDetail }/>
                <Route exact path='/login' component={ Login }/>
            </Switch>
        </div>
        </BrowserRouter>
    )
}

export default Routes