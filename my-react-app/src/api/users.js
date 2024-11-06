import axios from 'axios'
import Cookies from 'js-cookie'

const SERVER_URL = 'http://localhost:3000'
const authorizationToken = Cookies.get('token')
const email  = localStorage.getItem('email')

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

export const compeleteProfileApi = (profile) => {

    const url = `${SERVER_URL}/api/profile/complete`
    const formData = new FormData();

    formData.append('name', profile.name);
    formData.append('bio', profile.bio);
    formData.append('birthday', profile.birthday);
    formData.append('profilePicture',profile.profilePicture); // Append the image file
    formData.append('userID',profile.userID)
    formData.append('email',profile.email)
    
    return axios.post(url,formData,{headers:{Authorization:`Bearer ${authorizationToken}`}});

} 

export const checkProfileApi = () => {
    const params = new URLSearchParams();
    if(email) params.append('email',email)


    let url = `${SERVER_URL}/api/profile/check?`
    url += params.toString()
   
    return axios.get(url,{headers:{Authorization:`Bearer ${authorizationToken}`}});

} 

export const getProfileApi = () => {

    const url = `${SERVER_URL}/api/profile/`
    return axios.get(url,{headers:{Authorization:`Bearer ${authorizationToken}`}});

} 

