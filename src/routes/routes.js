import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Occurence from '../pages/Occurrence/Ocurrence'
import TopMenu from '../components/TopMenu/TopMenu'
import OccurenceDetail from '../pages/OccurrenceDetail/OccurenceDetail'


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
            </Switch>
        </div>
        </BrowserRouter>
    )
}

export default Routes