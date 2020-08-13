import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:3000',
})

export const loginUser = (loginData) => {
    return instance.post('/api/auth/login', loginData)
}

export const registerUser = (registerData) => {
    return instance.post('/api/auth/register', registerData)
}
