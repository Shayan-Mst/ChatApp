import React, { useContext } from 'react'
import Sidebar from './accessiblity/Sidebar'
import { ChatContext } from '../context'

const ContactUs = () => {

    const {setSidebar} = useContext(ChatContext)

  return (
    <>
    <Sidebar/>
    <div className='text-center place-items-center flex justify-between'>
    
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


   

    <div></div>

</div>

    <div className="min-h-screen flex flex-col items-center  px-4 sm:px-6 lg:px-8">
    <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8 border border-2">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center ">
                <h3 className="text-lg font-semibold text-gray-700">Our Location</h3>
                <p className="text-gray-600">123 ChatNest Ave, Chat City, CT 12345</p>
            </div>
            <div className="text-center ">
                <h3 className="text-lg font-semibold text-gray-700">Email Us</h3>
                <p className="text-gray-600">chatappchatnest@gmail.com</p>
            </div>
            <div className="text-center ">
                <h3 className="text-lg font-semibold text-gray-700">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
        </div>

        
        <form action="#" method="POST" className="space-y-6">
            <div>
                <label for="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
                <label for="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
                <label for="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="inline-block btn-one max-w-64">
                    Send Message
                </button>
            </div>
        </form>

        
      
    </div>
</div>
</>
  )
}

export default ContactUs