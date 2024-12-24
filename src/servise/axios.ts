import axios from 'axios'
import { getItem } from '../helpers/localeStorage'

axios.defaults.baseURL = import.meta.env.BASE_URL

axios.interceptors.request.use(config => {
    const token = getItem('token')
    const authorization = token ? `Token ${token}` : ''
    config.headers.Authorization = authorization
    return config
})

export default axios