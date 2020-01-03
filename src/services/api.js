import axios from 'axios'

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
    return response
}, (error) => {
    console.log(error.response.status)
    return Promise.reject(error.response)
})

export default api