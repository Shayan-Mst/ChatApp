import React, { useContext } from 'react'
import chris from './../assets/chris.jpg'
import { useNavigate,Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import Sidebar from './accessiblity/Sidebar'
import { ChatContext } from '../context'

const Setting = () => {

    const navigate = useNavigate()
    const {setSidebar} = useContext(ChatContext)

  
  
  

    function logout(){

        Cookies.remove('token')
        navigate('/sign')

    }
  return (
    <>
    <Sidebar/>
   
     <div className='relative md:px-16 md:mx-16 h-full '>


     <div className='items-center flex justify-between'>
    
    <svg className='cursor-pointer'
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="36"
      height="36"
      fill="currentColor"
      onClick={()=>setSidebar(true)}
    >
     
      <rect y="5" width="24" height="2" rx="1"></rect>
      
      <rect y="11" width="24" height="2" rx="1"></rect>
      
      <rect y="17" width="24" height="2" rx="1"></rect>
    </svg>
    
    
    <p className='text-4xl font-semibold'>Settings</p> 
       
    
    <div></div>
       
    </div>

   
    <br/>

    <Link to="/setting/profile" className="cursor-pointer flex items-center justify-between p-4 my-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg  max-w-sm mx-auto">
      {/* Left section: Profile image */}
      <div className="flex items-center">
        <img
          src={chris} // Replace with actual profile image URL
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        {/* Text: User Profile and Edit Profile */}
        <div className="ml-4">
          <p className="font-semibold text-gray-800">User Profile</p>
          <p className="text-sm text-gray-500">Edit Profile Details</p>
        </div>
      </div>

      {/* Right section: Arrow */}
      <div className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>

    <Link  to="/setting/notification" className="cursor-pointer flex items-center justify-between p-4 my-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg max-w-sm mx-auto">
      {/* Left section: Profile image */}
      <div className="flex items-center">
      
        {/* Text: User Profile and Edit Profile */}
        <div className="ml-4">
          <p className="text-lg font-semibold text-gray-800">Notification Settings</p>
         
        </div>
      </div>

      {/* Right section: Arrow */}
      <div className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>

    <Link to="/setting/security" className="cursor-pointer flex items-center justify-between p-4 my-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg max-w-sm mx-auto">
      {/* Left section: Profile image */}
      <div className="flex items-center">
      
        {/* Text: User Profile and Edit Profile */}
        <div className="ml-4">
          <p className="text-lg font-semibold text-gray-800">Security Settings</p>
         
        </div>
      </div>

      {/* Right section: Arrow */}
      <div className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
        
    <Link to="/setting/help&support" className="cursor-pointer flex items-center justify-between p-4 my-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg max-w-sm mx-auto">
      {/* Left section: Profile image */}
      <div className="flex items-center">
      
        {/* Text: User Profile and Edit Profile */}
        <div className="ml-4">
          <p className="text-lg font-semibold text-gray-800">Help & Support</p>
         
        </div>
      </div>

      {/* Right section: Arrow */}
      <div className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>

    <Link to="/setting/privacy" className="cursor-pointer flex items-center justify-between p-4 my-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg max-w-sm mx-auto">
      {/* Left section: Profile image */}
      <div className="flex items-center">
      
        {/* Text: User Profile and Edit Profile */}
        <div className="ml-4">
          <p className="text-lg font-semibold text-gray-800">Privacy Policy</p>
         
        </div>
      </div>

      {/* Right section: Arrow */}
      <div className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>

<div className='mx-auto max-w-sm my-12'>
    <button onClick={logout} className='btn-one '>Log out</button>
    </div>
</div>
    </>
  )
}

export default Setting