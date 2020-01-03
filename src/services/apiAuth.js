import axios from 'axios'

const apiAuth = axios.create({
        baseURL: 'http://sgoengenharia.herokuapp.com'
})

export default apiAuth