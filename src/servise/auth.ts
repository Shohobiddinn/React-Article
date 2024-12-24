import axios from './axios'

const AuthServise = {
    register(user: any) {
        return axios.post('/users', { user })
    },
    login(user: any) {
        return axios.post('/users/login', { user })
    },
    getUser() {
        return axios.get('/user')
    },
}

export default AuthServise