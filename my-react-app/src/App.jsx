import { useState } from 'react'
import { Routes , Route} from 'react-router-dom'
import Intro from './components/Intro'

import './App.css'
import Sign from './components/Sign'
import Register from './components/Register'
import Home from './components/Home'
import { ChatContext } from './context'
import Chat from './components/Chat'
import Profile from './components/Profile'
import Setting from './components/Setting'
import UserProfile from './components/UserProfile'

function App() {

  const [loading,setLoading] = useState(false)
  const [sidebar , setSidebar] = useState(false)
  const [currentUser,setCurrentUser] = useState('')


  return (
  
<ChatContext.Provider value={{loading,setLoading,sidebar,setSidebar,currentUser,setCurrentUser}}>
    <div className='App'>

<Routes>
  <Route path='/' element={<Intro/>}/>
  <Route path='/sign' element={<Sign/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/chat/:chatWith' element={<Chat/>}/>
  <Route path='/profile' element={<UserProfile/>}/>
 
  <Route path='/setting' element={<Setting/>}/>
  <Route path='/setting/profile' element={<Profile/>}/>

</Routes>


    </div>
    </ChatContext.Provider>
  
  )
}

export default App
