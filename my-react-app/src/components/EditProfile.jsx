import React,{useEffect,useState} from 'react'
import { getProfileApi, updateProfileApi } from '../api/users'

const EditProfile = () => {

    const [profile ,setProfile] = useState({
    
  name:"",
  userID:"",
  bio : "",
  birthday:"",
  
      })
      const [loading,setLoading] = useState(true);

      const [copySuccess, setCopySuccess] = useState('');

      //fetching profile data
      useEffect(()=>{

        async function  Fetch(){
    
          try{
            const response = await getProfileApi()
            if(response.status == 200){
      
              const {name,userID,bio,birthday} = response.data.profile;
              setProfile({...profile,name:name,userID:userID,bio:bio,birthday:birthday});
              setLoading(false)
            }
          }
    
          catch(error){
    console.log(error)
          }
         
    
        }
    
        Fetch()
    
        },[])
    
      //change input value
        const handleChange = (e) => {
            const { name, value } = e.target;
            setProfile({ ...profile, [name]: value });
        };
    
        //update profile
        const handleSubmit = async(e) => {
            e.preventDefault();
            // Submit form logic here
            try{

                const response = await updateProfileApi(profile)

                if(response.status == 200){

                    setCopySuccess("Profile Changed Successfuly")
                    setTimeout(()=>{setCopySuccess('');},2000)
                    
                }
            }
            catch(error){

            }
        };

 //handle date of birth
 const date = new Date(profile.birthday);
 const formattedDate = date.toLocaleDateString('en-GB', {
   day: 'numeric',
   month: 'long',
   year: 'numeric'
 });

 
  return (
    <>
    {loading?loading:<div className='relative md:px-16'>

        <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg ">
            <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name Field */}
                <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={profile.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                    />
                </div>

                {/* Bio Field */}
                <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="bio">Bio</label>
                    <textarea 
                        id="bio" 
                        name="bio" 
                        value={profile.bio}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        rows="3" 
                        required 
                    />
                </div>

                {/* Birthday Field */}
                <div>
                    <label className="block text-gray-600 font-medium mb-2 inline" htmlFor="birthday">Birthday</label>
                    <span className='float-right text-sm'>{formattedDate}</span>
                    <input 
                        type="date" 
                        id="birthday" 
                        name="birthday" 
                        value={profile.birthday}
                    
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        
                    />
                </div>

                {/* UserID Field (Read-Only) */}
                <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="userID">User ID</label>
                    <input 
                        type="text" 
                        id="userID" 
                        name="userID" 
                        value={profile.userID}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg text-gray-700 bg-gray-100"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button type="submit" className="btn-one">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>


        </div>}

        {copySuccess &&
      <div className="toaster show" id="toaster">
      <span>{copySuccess}</span>
  </div>}
    </>
  )
}

export default EditProfile