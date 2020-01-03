import React from 'react'
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Occurence from '../pages/Occurrence/Ocurrence'
import TopMenu from '../components/TopMenu/TopMenu'
import OccurenceDetail from '../pages/OccurrenceDetail/OccurenceDetail'
import Login from '../pages/Login/Login'
import Auth from '../services/auth'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route { ...rest } render={ props => 

        Auth.authenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{pathname:'/login', state: {from: props.location} }}/>
        )     
    }
    />
)


const Routes = () =>{
    return(
        <BrowserRouter>
        <TopMenu/>
        <div className="container">
            <Switch>
                <PrivateRoute exact path='/' component={ Home }/>
                <PrivateRoute exact path='/ocorrencia' component={ Occurence }/>
                <PrivateRoute exact path='/ocorrencia/cadastro/:ID' component={ OccurenceDetail }/>
                <PrivateRoute exact path='/ocorrencia/cadastro/' component={ OccurenceDetail }/>
                <Route exact path='/login' component={ Login }/>
            </Switch>
        </div>
        </BrowserRouter>
    )
}

export default Routes