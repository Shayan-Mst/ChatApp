import { useState } from 'react'
import { Routes , Route} from 'react-router-dom'
import Intro from './components/Intro'

import './App.css'

function App() {


  return (
  

    <div className='App'>


<Routes>
  <Route path='/' element={<Intro/>}/>
</Routes>


    </div>
    
  
  )
}

export default App
