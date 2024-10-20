import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginApi } from '../api/users';
import Cookies from 'js-cookie';
import { ChatContext } from '../context';

const Sign = () => {
  const [user,setUser] = useState({
    email:'',
    password:''
  })
  const navigate = useNavigate()
  const {setCurrentUser} = useContext(ChatContext)
  
async function submit(e){
e.preventDefault();

try{

  const response = await LoginApi(user);
  if(response.status == 200){

    Cookies.set('token',response.data.token)
    localStorage.setItem('email',user.email)
    setCurrentUser(user.email)

    navigate('/home')


  }
}
catch(error){

  
  const toaster = document.getElementById('toaster');
  toaster.classList.add('show');
  setTimeout(()=>{
    toaster.classList.remove('show');
  },2000)




  }
}
  return (
    <>
    <div className='fade-in middle-box'>

        <div className='flex items-center justify-center'>

        <svg className='inline' width='70' height='70' fill="#bbc625" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#bbc625" stroke-width="0.00032" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>chat</title> <path d="M16.52 23.44c-1 0-2-0.6-2.88-1.68-0.040 0-0.040 0-0.080 0-4.16 0-7.56-3.4-7.56-7.56s3.4-7.56 7.56-7.56 7.56 3.4 7.56 7.56c0 2.040-0.8 3.96-2.24 5.36 0.16 1.24-0.040 2.32-0.6 3.040-0.44 0.52-1.080 0.84-1.76 0.84v0zM14.080 20.040c0.28 0 0.52 0.12 0.68 0.36 0.72 1 1.36 1.36 1.76 1.36 0.2 0 0.32-0.080 0.44-0.2 0.32-0.4 0.4-1.2 0.2-2.080-0.080-0.32 0.040-0.64 0.28-0.84 1.28-1.12 2-2.72 2-4.4 0-3.24-2.64-5.88-5.88-5.88s-5.88 2.64-5.88 5.88 2.64 5.88 5.88 5.88c0.12 0 0.28 0 0.4 0 0.040-0.080 0.12-0.080 0.12-0.080zM3.84 25.36c-0.2 0-0.44-0.040-0.6-0.12-0.96-0.32-1.72-1.48-1.48-3.36-1.12-1.12-1.76-2.68-1.76-4.28 0-2.56 1.52-4.8 3.88-5.72 0.44-0.16 0.92 0.040 1.080 0.48s-0.040 0.92-0.48 1.080c-1.68 0.68-2.8 2.32-2.8 4.16 0 1.28 0.56 2.52 1.52 3.36 0.040 0.040 0.080 0.080 0.12 0.12 0.16 0.2 0.24 0.44 0.16 0.72-0.24 1.24 0.12 1.8 0.32 1.88 0.24 0.080 0.76-0.24 1.2-1.16 0.16-0.32 0.48-0.48 0.8-0.48 0.84 0.040 1.72-0.12 2.48-0.56 0.4-0.24 0.92-0.080 1.16 0.32s0.080 0.92-0.32 1.16c-0.88 0.48-1.88 0.76-2.88 0.76-0.76 1.2-1.68 1.64-2.4 1.64z"></path> </g></svg>
        <span className='text-3xl text-center font-semibold'>ChatNest</span>
        </div>

        <form onSubmit={(e)=>submit(e)} className='sign-box'>


        <div className="input-container">
    <input value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} type="email" placeholder="" id="input"/>
    <span>Email</span>
    {/* <button className='py-3 sm:px-12 px-6 bg-purple-600 ml-4 text-white '>Search</button> */}
  </div>

  <div className="input-container">
    <input value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} type="password" placeholder="" id="input"/>
    <span>Password</span>
    {/* <button className='py-3 sm:px-12 px-6 bg-purple-600 ml-4 text-white '>Search</button> */}
  </div>

  <button type='submit' className='btn-one'>Log in</button>

  <div className='flex justify-evenly text-sm my-2'>
    <span>Don't have an account?</span>
    <span style={{color:"#bbc625"}}><Link to='/register'>Register</Link></span>
  </div>


        </form>

    </div>
    <div className="toaster-error" id="toaster">
        <span>Email or Password is wrong!</span>
    </div>
    </>
  )
}

export default Sign