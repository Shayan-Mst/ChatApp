import axios from 'axios'

const SERVER_URL = 'http://localhost:3000'

export const registerApi = (user) => {

    const url = `${SERVER_URL}/register`
    return axios.post(url,user);


}

export const codeApi = (user) => {

    const url = `${SERVER_URL}/verify-code`
    return axios.post(url,user);


}