import axios from 'axios'
import Auth from './auth'

const api = axios.create({
    baseURL: 'https://sgoengenharia.herokuapp.com/api',
})

api.interceptors.request.use(async config => {
    const token = window.localStorage.getItem('@sgo-token')
    if (token) {
      config.headers.Authorization = `token ${token}`;
    }

    return config;
});

api.interceptors.response.use(response =>{
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

export default api