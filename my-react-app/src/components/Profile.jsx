import React,{useState,useRef} from 'react'
import blank from './../assets/blank.png'
import { useNavigate } from 'react-router-dom'


const Profile = () => {

    const [copySuccess, setCopySuccess] = useState('');
    const [isEmpty , setIsEmpty] = useState(true);
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null); // Reference to the hidden input

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    };

    const copyToClipboard = async () => {
      try {
        const profileLink = 'https://example.com/profile/sophi'; // Replace with dynamic profile URL
        await navigator.clipboard.writeText(profileLink);
        setCopySuccess('Profile link copied!'); // Show success message
        setTimeout(()=>{
 
            setCopySuccess('');

        },1000)
      } catch (err) {
        setCopySuccess('Failed to copy!');
        console.error('Failed to copy: ', err);
      }
    };

    const navigate = useNavigate()

    function goEdit(){
        navigate('/profile/edit')
    }
    const handleButtonClick = () => {
      // Simulate click on the hidden file input
      fileInputRef.current.click();
    };

  return (
    <>
    <div className='relative md:px-16 h-full '>
    <input 
     ref={fileInputRef} 
        className='hidden'
        type="file" 
        accept="image/*" // This ensures that only image files can be selected
        onChange={handleImageChange} 
      />
    
    <section className='relative'>
   
    <button onClick={handleButtonClick} className='add-chat absolute top-10 right-0 md:right-24 lg:right-56 xl:right-80'>
   
<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 5H9.32843C8.79799 5 8.28929 5.21071 7.91421 5.58579L7.08579 6.41421C6.71071 6.78929 6.20201 7 5.67157 7H4C2.89543 7 2 7.89543 2 9L2 19C2 20.1046 2.89543 21 4 21H18C19.1046 21 20 20.1046 20 19V12M17 5H23M20 8V2M11 18C13.2091 18 15 16.2091 15 14C15 11.7909 13.2091 10 11 10C8.79086 10 7 11.7909 7 14C7 16.2091 8.79086 18 11 18Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
</button>
        <img style={{width:"150px",height:"150px"}} className={`object-cover mx-auto ${isEmpty?"":"rounded-full"}`} src={blank} alt='userProfile'/>
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

<span className='float-right'>Add your bio</span>
</div>


<div className='max-w-md mx-auto py-3'>

<span className='text-gray-500'>Date of Birth</span>

<span className='float-right'>Apr 28 , 2001</span>
</div>
   
</section>

<section className='my-8 text-center'>


<div className='my-4'>
    <button onClick={goEdit} className='btn-one max-w-md '>
        
    <svg className='inline mx-2' width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#fff"></path> </g></svg>
        
        Edit Info
        
        </button>
    </div>

<div>
    <button onClick={copyToClipboard}  className='btn-one max-w-md '>
        

    <svg width="20" height="20" className='inline mx-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z" fill="#fff"></path> <path d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z" fill="#fff"></path> </g></svg>
        
        Copy Link Profile
        
        </button>
    </div>

</section>

    </div>
    {copySuccess &&
      <div className="toaster show" id="toaster">
      <span>{copySuccess}</span>
  </div>}
  
    </>
  )
}

export default Profile