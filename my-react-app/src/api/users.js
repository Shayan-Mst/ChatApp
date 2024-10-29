import axios from 'axios'
import Cookies from 'js-cookie'

const SERVER_URL = 'http://localhost:3000'
const authorizationToken = Cookies.get('token')

export const registerApi = (user) => {

    const url = `${SERVER_URL}/register`
    return axios.post(url,user);


}

export const codeApi = (user) => {

    const url = `${SERVER_URL}/verify-code`
    return axios.post(url,user);


}

export const LoginApi = (user) => {

    const url = `${SERVER_URL}/login`
    return axios.post(url,user);


}

export const checkProfileApi = (profile) => {

    const url = `${SERVER_URL}/api/profile/complete`
    return axios.post(url,profile,{headers:{Authorization:`Bearer ${authorizationToken}`}});

} 

