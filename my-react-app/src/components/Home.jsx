import React, { useState, useEffect, useRef, useContext } from 'react';
import sophi from './../assets/sophi.jpg'
import john from './../assets/john.jpg'
import { ChatContext } from '../context';
import Sidebar from './accessiblity/Sidebar';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [showPlus, setShowPlus] = useState(false); // Controls the visibility of the plus icon
    const chatListRef = useRef(null);
    const {setSidebar} = useContext(ChatContext)
    const navigate = useNavigate();

    //goes to chat page with that chatWithUser account
  const handleChat = (chatWithUser) => {
    navigate(`/chat/${chatWithUser}`);
  };

    const chats = [
        {
          id: 1,
          email : "Alice@gmail.com",
          name: 'Sophi',
          lastMessage: 'Hey, are we still on for tonight?',
          timeAgo: '4h ago',
          pfp: john, // Placeholder image
        },
        {
          id: 2,
          email : "Alice@gmail.com",
          name: 'John',
          lastMessage: 'Can you send me the file?',
          timeAgo: '2h ago',
          pfp: sophi,
        },
        {
          id: 3,
          email : "Alice@gmail.com",
          name: 'Alice',
          lastMessage: 'It was great catching up!',
          timeAgo: '1h ago',
          pfp: sophi,
        },
        {
          id: 4,
          email : "Alice@gmail.com",
          name: 'Mike',
          lastMessage: 'Let’s have a meeting tomorrow.',
          timeAgo: '10m ago',
          pfp: john,
        },
        
   
      ];

   
useEffect(() => {
    // Function to reveal the div when scrolling down or if no scrolling is available
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > 150) {
        setShowPlus(true); // Reveal the div when user scrolls down 150px
      }
    };

    // Check if scrolling is possible
    if (document.body.scrollHeight <= window.innerHeight) {
      setShowPlus(true); // Reveal if no scrolling is available
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  

  return (<>
  <Sidebar/>
    <div className='relative'>

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


    <span className='text-4xl font-semibold'>Chat<span style={{color:"#bbc625"}}>Nest</span></span>

    <div></div>

</div>

<section className='my-8'>
<div className="search-box mx-auto">
    <input type="text" placeholder="Search..."/>
    <svg className=" icon" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" stroke="none" fill="black">
      <path d="M10.035,18.069a7.981,7.981,0,0,0,3.938-1.035l3.332,3.332a2.164,2.164,0,0,0,3.061-3.061l-3.332-3.332A8.032,8.032,0,0,0,4.354,4.354a8.034,8.034,0,0,0,5.681,13.715ZM5.768,5.768A6.033,6.033,0,1,1,4,10.035,5.989,5.989,0,0,1,5.768,5.768Z"/>
    </svg>
  </div>

</section>

<section className='mt-8 '>

<div className='status--container'>

   

<div className='online-status'>
    <img  src={sophi}/>
    <p>Sophi</p>
</div>


<div className='online-status'>
    <img  src={john}/>
    <p>John</p>
</div>


</div>


</section>

<section>

<div ref={chatListRef} className=" max-w-md mx-auto mt-8 ">
      {chats.map((chat) => (
        <div onClick={()=>handleChat(chat.email)} key={chat.id} className="chat-item  p-4  hover:bg-gray-100 transition duration-150">
          <img
            src={chat.pfp}
            alt={chat.name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="chat-info flex-1">
            <div className="flex justify-between">
              <h4 className="font-semibold">{chat.name}</h4>
              <span className="text-gray-400 text-sm">{chat.timeAgo}</span>
            </div>
            <p className="text-gray-500 text-sm truncate">{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
</section>
{showPlus && (
    <section className='add-chat'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34">
      <rect x="10" y="4" width="4" height="16" fill="white"/>
      <rect x="4" y="10" width="16" height="4" fill="white"/>
    </svg>
    
    </section>
)}


    </div>
    </>
  )
}

export default Home