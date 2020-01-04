import axios from 'axios'
import Auth from '../services/auth'

const apiAuth = axios.create({
        baseURL: 'http://sgoengenharia.herokuapp.com'
})

apiAuth.interceptors.response.use(response =>{
        if(response.status !== 401){
            Auth.authenticated = true 
        }
        return response
    }, (error) => {
        if(error.response.status === 401){
            Auth.authenticated = false 
        }
        return Promise.reject(error.response)
    })

export default apiAuth