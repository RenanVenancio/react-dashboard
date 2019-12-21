import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Occurence from '../pages/Occurrence/Ocurrence'
import TopMenu from '../components/TopMenu/TopMenu'


const Routes = () =>{
    return(
        <BrowserRouter>
        <TopMenu/>
        <div className="container">
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route exact path='/ocorrencia' component={ Occurence }/>
            </Switch>
        </div>
        </BrowserRouter>
    )
}

export default Routes