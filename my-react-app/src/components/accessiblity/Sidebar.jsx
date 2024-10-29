import React, { useContext,useState } from 'react'
import { ChatContext } from '../../context'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const {sidebar,setSidebar} = useContext(ChatContext)
    const [active,setActive] = useState('');
  return (
    <div className={`sidebar ${sidebar?'sidebar--active':null}`}>

    <div className='sidebar-logo'>

    <span style={{color:"#A5B400"}} className='text-lg font-bold'>MENU</span>
    <svg onClick={()=>setSidebar(false)} width="30" height="30" xmlns="http://www.w3.org/2000/svg" stroke="white" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z"/></svg>
     
    </div>

    <ul className='sidebar-content'>

<li className='sidebar-item'>
<Link to="/home" className='sidebar-link'>

<svg style={{marginLeft:"2px"}} className={`${active == 'Home'?'item-active':null}`} width="20" height="20" fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="31.Home"><path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"/><path d="M18.293 13.707 12 7.414l-6.293 6.293-1.414-1.414L12 4.586l7.707 7.707-1.414 1.414z"/><path d="M17 18H7v-8h2v6h6v-6h2v8z"/></g></svg>
<span>Home</span>
</Link>
</li>


<li className='sidebar-item'>
<Link to="/setting/profile"  className='sidebar-link'>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="currentColor"
>
  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4.41 0-8 2.69-8 6v2h16v-2c0-3.31-3.59-6-8-6z" />
</svg>
<span>Profile</span>
</Link>
</li>




<li className='sidebar-item'>
<Link to="/contact-us"  className='sidebar-link'>
<svg width="20" height="20" fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="47-Contact-Real Estate"><path d="M22.13 16.44a1 1 0 0 0-1.41 0L17.18 20l-5.66-5.66 3.54-3.54a1 1 0 0 0 0-1.41L8 2.3a1 1 0 0 0-1.41 0L1.63 7.25A5.91 5.91 0 0 0 .32 9.41a4.64 4.64 0 0 0 1.3 4.91l15.56 15.55a4.78 4.78 0 0 0 3.44 1.56 5.39 5.39 0 0 0 3.64-1.56l5-5a1 1 0 0 0 0-1.41zm.71 12a2.85 2.85 0 0 1-4.25 0l-7.78-7.78L3 12.9a2.85 2.85 0 0 1 0-4.24l4.28-4.24 5.66 5.66-2.83 2.82a2 2 0 0 0 0 2.83l5.66 5.66a2 2 0 0 0 2.83 0l2.83-2.83 5.66 5.66z"/><path d="m30.63 4.22-5-4a1 1 0 0 0-1.25 0l-5 4A1 1 0 0 0 19 5v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-.37-.78zM29 12h-2V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3h-2V5.48l4-3.2 4 3.2z"/></g></svg>
<span>Contact Us</span>
</Link>
</li>
<li className='sidebar-item'>
<Link to="/setting"  className='sidebar-link'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill='black'><circle cx="9.952" cy="9.953" r="3"/><path d="M9.952 0A9.953 9.953 0 1 0 19.9 9.953 9.953 9.953 0 0 0 9.952 0zm7 10.953h-2.1a4.98 4.98 0 0 1-.731 1.755l1.487 1.492-1.414 1.41-1.488-1.488a4.955 4.955 0 0 1-1.754.73v2.1h-2v-2.1a5 5 0 0 1-1.752-.731L5.709 15.61 4.3 14.2l1.488-1.489a4.94 4.94 0 0 1-.73-1.754h-2.1v-2h2.1A5 5 0 0 1 5.783 7.2L4.3 5.711 5.71 4.3 7.2 5.785a4.919 4.919 0 0 1 1.754-.73v-2.1h2v2.1a4.963 4.963 0 0 1 1.754.73L14.194 4.3l1.414 1.414L14.12 7.2a4.936 4.936 0 0 1 .731 1.755h2.1z"/></svg>
<span>Setting</span>
</Link>
</li>


    </ul>
<div className='signature'>Shayan Mozafari

<span className='block  font-normal'>Web Developer</span></div>
</div>
  )
}

export default Sidebar