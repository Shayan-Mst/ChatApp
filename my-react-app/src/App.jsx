import { useState } from 'react'
import { Routes , Route} from 'react-router-dom'
import Intro from './components/Intro'

import './App.css'
import Sign from './components/Sign'
import Register from './components/Register'

function App() {


  return (
  

    <div className='App'>


<Routes>
  <Route path='/' element={<Intro/>}/>
  <Route path='/sign' element={<Sign/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>


    </div>
    
  
  )
}

export default App
