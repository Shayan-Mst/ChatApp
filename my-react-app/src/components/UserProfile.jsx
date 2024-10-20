import React from 'react'
import sophi from './../assets/sophi.jpg'
import { useNavigate } from 'react-router-dom'


const UserProfile = () => {

    const navigate = useNavigate()

    function goEdit(){
        navigate('/profile/edit')
    }
  return (
    <div className='relative md:px-16 h-full '>

    
    <section className='relative'>

   
        <img style={{width:"150px",height:"150px"}} className='rounded-full object-cover mx-auto' src={sophi} alt='userProfile'/>
    </section>

<section className='text-center my-2 '>
    <p className='text-lg font-bold'>Sophia</p>
    <span>Online</span>
</section>

<section className='my-8'>
    <div className='max-w-md mx-auto py-2'>

        <span className='text-gray-500'>Email</span>

        <span className='float-right'>example@gmail.com</span>
        </div>

        <div className='max-w-md mx-auto py-3'>

        <span className='text-gray-500'>userID</span>

        <span className='float-right'>#sophia</span>
        </div>


        <div className='max-w-md mx-auto py-3'>

<span className='text-gray-500'>Bio</span>

<span className='float-right'>No Bio</span>
</div>


<div className='max-w-md mx-auto py-3'>

<span className='text-gray-500'>Date of Birth</span>

<span className='float-right'>Apr 28 , 2001</span>
</div>
   
</section>

<section className='my-8 text-center'>


<div className='my-4'>
    <button onClick={goEdit} className='btn-one max-w-md '>
        
  
    <svg className='inline mx-2' width="20" height="20"  fill="#fff"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 458 458" xmlSpace="preserve" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M428,41.534H30c-16.569,0-30,13.431-30,30v252c0,16.568,13.432,30,30,30h132.1l43.942,52.243 c5.7,6.777,14.103,10.69,22.959,10.69c8.856,0,17.258-3.912,22.959-10.69l43.942-52.243H428c16.568,0,30-13.432,30-30v-252 C458,54.965,444.568,41.534,428,41.534z M323.916,281.534H82.854c-8.284,0-15-6.716-15-15s6.716-15,15-15h241.062 c8.284,0,15,6.716,15,15S332.2,281.534,323.916,281.534z M67.854,198.755c0-8.284,6.716-15,15-15h185.103c8.284,0,15,6.716,15,15 s-6.716,15-15,15H82.854C74.57,213.755,67.854,207.039,67.854,198.755z M375.146,145.974H82.854c-8.284,0-15-6.716-15-15 s6.716-15,15-15h292.291c8.284,0,15,6.716,15,15C390.146,139.258,383.43,145.974,375.146,145.974z"></path> </g> </g> </g></svg>
        Message
        
        </button>
    </div>

<div>
    <button className='btn-one max-w-md '>
        

        
    <svg width="24" height="24" className='inline mx-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.63605 5.63603L18.364 18.364M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        Block
        
        </button>
    </div>

</section>

    </div>
  )
}

export default UserProfile