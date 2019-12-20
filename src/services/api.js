import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sgoengenharia.herokuapp.com/api',
    headers: {
        Authorization: 'token f07a13e4f064575254cd299f4fec4750caf1cf27'
    }
})

export default api