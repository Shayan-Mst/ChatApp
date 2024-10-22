import React,{useState,useRef, useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import alex from './../assets/michael.jpg'
import io from 'socket.io-client';
import { ChatContext } from '../context';
import { useParams } from 'react-router-dom';


const socket = io('http://localhost:3000'); // Point to your backend



const Chat = () => {

    const textareaRef = useRef(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    const {currentUser} = useContext(ChatContext)
    const navigate = useNavigate()
    const { chatWith } = useParams(); // chatWith comes from the URL
    // Function to auto-adjust textarea height
    const handleInput = () => {
      const textarea = textareaRef.current;
      textarea.style.height = '24px'; // Reset the height
      const maxHeight = parseInt(getComputedStyle(textarea).lineHeight, 10) * 2 + 20; // 3 lines + padding
      textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px'; // Set the new height, capped at maxHeight
    };
  
    // Update state and adjust height when typing
    const handleChange = (e) => {
      setMessage(e.target.value);
      handleInput();
    };

    function goBack(){navigate(-1) }


  

  useEffect(() => {
    // Listening for incoming messages from the server
    socket.on('receive_message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    // Load previous messages on page load
    socket.emit('load_messages', { sender: currentUser?currentUser:localStorage.getItem('email'), receiver: chatWith });

    socket.on('previous_messages', (prevMessages) => {
 
      setMessages(prevMessages);
    });

    return () => {
      socket.off('receive_message');
      socket.off('previous_messages');
    };
  }, [currentUser, chatWith]);


  const sendMessage = () => {
    const messageData = {
      sender: currentUser?currentUser:localStorage.getItem('email'),
      receiver: chatWith,
      message,
      time: new Date().toLocaleString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // 24-hour format, change to true for AM/PM
      }),
    };

    // Send the message to the server
    socket.emit('send_message', messageData);
    setMessages((prev) => [...prev, messageData]);
    setMessage(''); // Clear the input field
  };
  

  return (
  <>

    <div className='relative md:px-16 h-full'>
<header style={{maxWidth:"700px"}} className='flex justify-between items-center border-b-2 border-gray-200 py-4 mx-auto'>

<button onClick={goBack}><svg width="30" height="30" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_left [#334]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -6679.000000)" fill="#A5B400"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" id="arrow_left-[#334]"> </path> </g> </g> </g> </g></svg>
</button>
<div className='flex'>
<img src={alex}  className='pfp'
alt='user'/>
<div>
    <p className='font-semibold'>Alex </p>
    <small>Active now</small>
</div>
</div>

<svg width="30" height="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" points="23,19 23,13 29,10 29,22 "></polygon> <rect x="3" y="9" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" width="20" height="14"></rect> </g></svg>
</header>

<section className="chat-container mb-4">


    {messages.map((msg,index)=>(

      msg.sender == currentUser || msg.sender == localStorage.getItem('email')?<div className="chat-message right" key={index}>
      <div className="message">
       {msg.message}
        <span className="time">{msg.time}</span>
      </div>
      
      </div>:
      
 <div className="chat-message left" key={index}>
 <div className="message">
 {msg.message}
   <span className="time">{msg.time}</span>
 </div>
 
</div>




    ))}
   
  
</section>

<footer  className=' type--container'>
<button className='mr-2'><svg width="40" height="40" version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <g> <path className="linesandangles_een" d="M10,20c-1.657,0-3,1.343-3,3s1.343,3,3,3s3-1.343,3-3S11.657,20,10,20z M10,24 c-0.551,0-1-0.449-1-1s0.449-1,1-1s1,0.449,1,1S10.551,24,10,24z"></path> <circle className="linesandangles_een" cx="10" cy="16" r="3"></circle> <path className="linesandangles_een" d="M10,6C8.343,6,7,7.343,7,9s1.343,3,3,3s3-1.343,3-3S11.657,6,10,6z M10,10 c-0.551,0-1-0.449-1-1s0.449-1,1-1s1,0.449,1,1S10.551,10,10,10z"></path> <rect x="15" y="8" className="linesandangles_een" width="10" height="2"></rect> <rect x="15" y="15" className="linesandangles_een" width="10" height="2"></rect> <rect x="15" y="22" className="linesandangles_een" width="10" height="2"></rect> </g> <g> <path className="linesandangles_een" d="M10,20c-1.657,0-3,1.343-3,3s1.343,3,3,3s3-1.343,3-3S11.657,20,10,20z M10,24 c-0.551,0-1-0.449-1-1s0.449-1,1-1s1,0.449,1,1S10.551,24,10,24z"></path> <circle className="linesandangles_een" cx="10" cy="16" r="3"></circle> <path className="linesandangles_een" d="M10,6C8.343,6,7,7.343,7,9s1.343,3,3,3s3-1.343,3-3S11.657,6,10,6z M10,10 c-0.551,0-1-0.449-1-1s0.449-1,1-1s1,0.449,1,1S10.551,10,10,10z"></path> <rect x="15" y="8" className="linesandangles_een" width="10" height="2"></rect> <rect x="15" y="15" className="linesandangles_een" width="10" height="2"></rect> <rect x="15" y="22" className="linesandangles_een" width="10" height="2"></rect> </g> </g> </g></svg>
</button>
<div className='flex p-4 rounded-3xl border-2 border-gray-200 w-full justify-between'>
<textarea ref={textareaRef}value={message}onChange={handleChange} id="messageInput" className='type--message' placeholder='type your message here...'/>
<button onClick={sendMessage} className='mx-2'>
<svg width="25" height="25" fill="#000000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-q</title><path d="M476.59,227.05l-.16-.07L49.35,49.84A23.56,23.56,0,0,0,27.14,52,24.65,24.65,0,0,0,16,72.59V185.88a24,24,0,0,0,19.52,23.57l232.93,43.07a4,4,0,0,1,0,7.86L35.53,303.45A24,24,0,0,0,16,327V440.31A23.57,23.57,0,0,0,26.59,460a23.94,23.94,0,0,0,13.22,4,24.55,24.55,0,0,0,9.52-1.93L476.4,285.94l.19-.09a32,32,0,0,0,0-58.8Z"></path></g></svg>
</button>
</div>

</footer>
    </div>
    </>
  )
}

export default Chat