import React, { useState,useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { codeApi, registerApi } from '../api/users';
const Register = () => {

  const [register,setRegister] = useState({
    email:'',
    password:'',
    confirmPassword:'',
    
  })
  const [counter,setCounter] = useState(60)
  const [isActive, setIsActive] = useState(false);
  const [confirm,setConfirm] = useState(true)

  const [final,setFinal] = useState({
    email:'',
    code:'',
    password:'',
    
  })
  const [isOpen, setIsOpen] = useState(false); // Modal is open by default

  useEffect(()=>{

    setFinal({...final,email:register.email,password:register.password})

  },[register.email,register.password])

  const email = useRef(null)
  const password = useRef(null)
  const confirm_password = useRef(null)
  const codeRef = useRef(null)
  const registerRef = useRef(null)
  const confirmRef = useRef(null)
  const codeError = useRef(null)
  

  const navigate  = useNavigate()

   // useEffect to handle the countdown when the timer is active
   useEffect(() => {
    let interval = null;

    if (isActive && counter > 0) {
      // Set up the interval to decrease time every 1000ms (1 second)
      interval = setInterval(() => {
        setCounter(prevTime => prevTime - 1);
      }, 1000);
    } else if (counter === 0) {
      // Stop the timer when time reaches 0
      clearInterval(interval);
      setIsActive(false); // Stop the timer when countdown finishes
      
    }

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [isActive, counter]);


  const submit = async(e) => {

    e.preventDefault();
    

    try{
      
       const response = await registerApi(register)

       if(response.status==200){
       
      setIsOpen(true)

      email.current.disabled = true;
      password.current.disabled = true;
      confirm_password.current.disabled = true;
      codeRef.current.disabled = false;
      registerRef.current.disabled = true;
      setCounter(60)
      setConfirm(false)
      setIsActive(true);
      
   

       }

    }
    catch(error){

      console.log(error)

    }


  }

  const confirmCode = async() => {

    try{

      const response = await codeApi(final)
      console.log(response)
      if(response.status == 200){

        navigate('/sign')
      }

    }
    catch(error){

      codeError.current.style.display = "block"

    }
  }

  

  // Function to close the modal
  const handleClose = () => {
    setIsOpen(false);
  };


  return (
    <>
    <div className='fade-in middle-box'>

    <div className='flex items-center justify-center'>

    <svg className='inline' width='70' height='70' fill="#bbc625" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#bbc625" strokeWidth="0.00032" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>chat</title> <path d="M16.52 23.44c-1 0-2-0.6-2.88-1.68-0.040 0-0.040 0-0.080 0-4.16 0-7.56-3.4-7.56-7.56s3.4-7.56 7.56-7.56 7.56 3.4 7.56 7.56c0 2.040-0.8 3.96-2.24 5.36 0.16 1.24-0.040 2.32-0.6 3.040-0.44 0.52-1.080 0.84-1.76 0.84v0zM14.080 20.040c0.28 0 0.52 0.12 0.68 0.36 0.72 1 1.36 1.36 1.76 1.36 0.2 0 0.32-0.080 0.44-0.2 0.32-0.4 0.4-1.2 0.2-2.080-0.080-0.32 0.040-0.64 0.28-0.84 1.28-1.12 2-2.72 2-4.4 0-3.24-2.64-5.88-5.88-5.88s-5.88 2.64-5.88 5.88 2.64 5.88 5.88 5.88c0.12 0 0.28 0 0.4 0 0.040-0.080 0.12-0.080 0.12-0.080zM3.84 25.36c-0.2 0-0.44-0.040-0.6-0.12-0.96-0.32-1.72-1.48-1.48-3.36-1.12-1.12-1.76-2.68-1.76-4.28 0-2.56 1.52-4.8 3.88-5.72 0.44-0.16 0.92 0.040 1.080 0.48s-0.040 0.92-0.48 1.080c-1.68 0.68-2.8 2.32-2.8 4.16 0 1.28 0.56 2.52 1.52 3.36 0.040 0.040 0.080 0.080 0.12 0.12 0.16 0.2 0.24 0.44 0.16 0.72-0.24 1.24 0.12 1.8 0.32 1.88 0.24 0.080 0.76-0.24 1.2-1.16 0.16-0.32 0.48-0.48 0.8-0.48 0.84 0.040 1.72-0.12 2.48-0.56 0.4-0.24 0.92-0.080 1.16 0.32s0.080 0.92-0.32 1.16c-0.88 0.48-1.88 0.76-2.88 0.76-0.76 1.2-1.68 1.64-2.4 1.64z"></path> </g></svg>
    <span className='text-3xl text-center font-semibold'>ChatNest</span>
    </div>

    <div className='sign-box'>


    <div className="input-container">
<input ref={email} value={register.email} onChange={(e)=>setRegister({...register,email: e.target.value})} type="email" placeholder="" id="input"/>
<span>Email</span>
{/* <button className='py-3 sm:px-12 px-6 bg-purple-600 ml-4 text-white '>Search</button> */}
</div>

<div className="input-container">
<input ref={password} value={register.password} onChange={(e)=>setRegister({...register,password: e.target.value})}  type="password" placeholder="" id="input"/>
<span>Password</span>
{/* <button className='py-3 sm:px-12 px-6 bg-purple-600 ml-4 text-white '>Search</button> */}
</div>

<div className="input-container">
<input ref={confirm_password} value={register.confirmPassword} onChange={(e)=>setRegister({...register,confirmPassword: e.target.value})}  type="password" placeholder="" id="input"/>
<span>Confirm Password</span>
{/* <button className='py-3 sm:px-12 px-6 bg-purple-600 ml-4 text-white '>Search</button> */}
</div>
<br/>
<button ref={registerRef} onClick={(e)=>submit(e)} className='btn-one'>Register</button>

<div className="input-container">
<input ref={codeRef} disabled value={final.code} onChange={(e)=>setFinal({...final,code: e.target.value.replace(/[^0-9]/g, '')})} maxLength={6}  type="text" placeholder="" id="input"/>
<span>Confirm Code</span>
{/* <button className='py-3 sm:px-12 px-6 bg-purple-600 ml-4 text-white '>Search</button> */}
<button onClick={confirmCode} ref={confirmRef} disabled={confirm} style={{borderRadius:"16px"}} className='btn-confirm text-sm'>confirm</button>

<small ref={codeError} style={{fontSize:"10px"}} className='hidden absolute bottom-[-20px] left-3 text-red-500'>the code is wrong!</small>
</div>


<button onClick={submit}  disabled = {counter != 0} className='resend--code text-sm my-2' >resend code {counter > 0 && counter < 60 ? `in ${counter} second`:''} </button>





<div className='flex justify-evenly text-sm my-2'>
<span>Already have an account?</span>
<span style={{color:"#bbc625"}}><Link to='/sign'>Log in</Link></span>
</div>


    </div>

</div>

{isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Code Verification</h2>
            <p className="mb-3">Code verification sent to your email.</p>
            <p className="mb-6">please check your email to complete the register proccess.</p>
            <button
              onClick={handleClose}
              className="w-full btn-one text-white font-bold py-2 px-4 rounded"
            >
              Got it
            </button>
          </div>
        </div>
      )}
</>
  )
}

export default Register