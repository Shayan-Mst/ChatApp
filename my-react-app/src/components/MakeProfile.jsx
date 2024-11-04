import React , {useState,useRef} from 'react'
import blank from './../assets/blank.png'
import { compeleteProfileApi } from '../api/users';
import {useNavigate} from 'react-router-dom'

const MakeProfile = () => {

  
  const fileInputRef = useRef(null); // Reference to the hidden input
  const navigate = useNavigate();

  const [profile,setProfile] = useState({

    name:'',
    bio:'',
    profilePicture:null,
    birthday:'',
    userID:'',
    email:localStorage.getItem('email')

  })

  const [picture,setPicture] = useState(null)

  const [isEmpty , setIsEmpty] = useState(true);


  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
     reader.readAsDataURL(blob);
     
    });
  }

  const handleImageChange = async(e) => {
    e.preventDefault();
    const file = e.target.files[0];
  
    if (file) {
     const pic = await blobToBase64(file)
      setProfile({...profile,profilePicture : pic});
      setPicture(URL.createObjectURL(file))
      setIsEmpty(false)
    }
  };

  const handleButtonClick = () => {
    // Simulate click on the hidden file input
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic here
    try{

      const response = await compeleteProfileApi(profile)
    

      if(response.status==200){
        navigate('/home')
      }

    }
    catch(error){

      console.log(error)
    }
  };


 


  return (
    <div className="profile-completion-container">
    <div className="profile-card">
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="profile-picture-upload ">
        <input 
     ref={fileInputRef} 
        className='hidden'
        type="file" 
        accept="image/*" // This ensures that only image files can be selected
        onChange={handleImageChange} 
      />
    
    <section className='relative'>
   
    <button onClick={handleButtonClick} className='flex justify-center'>
   
<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 5H9.32843C8.79799 5 8.28929 5.21071 7.91421 5.58579L7.08579 6.41421C6.71071 6.78929 6.20201 7 5.67157 7H4C2.89543 7 2 7.89543 2 9L2 19C2 20.1046 2.89543 21 4 21H18C19.1046 21 20 20.1046 20 19V12M17 5H23M20 8V2M11 18C13.2091 18 15 16.2091 15 14C15 11.7909 13.2091 10 11 10C8.79086 10 7 11.7909 7 14C7 16.2091 8.79086 18 11 18Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
</button>
        <img style={{width:"150px",height:"150px"}} className={`object-cover my-2 mx-auto ${isEmpty?"":"rounded-full"}`} src={picture?picture : blank} alt='userProfile'/>
    </section>
        </div>
        <input type="text" value={profile.name} onChange={(e) => setProfile({...profile,name: e.target.value})} placeholder="Name" required />
        <input type="text" value={profile.bio} onChange={(e) => setProfile({...profile,bio: e.target.value})} placeholder="Bio" />
        {/* <input  type="date" value={profile.birthday} onChange={(e) => setProfile({...profile,birthday: e.target.value})} /> */}

        <div className="date-input-container">
      <label htmlFor="birthday" className="date-input-label">Birthday :</label>
      <input
      value={profile.birthday}
      onChange={(e) => setProfile({...profile,birthday: e.target.value})}
        type="date"
        id="birthday"
        name="birthday"
        className="date-input"
        
      />
    </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  </div>
  )
}

export default MakeProfile