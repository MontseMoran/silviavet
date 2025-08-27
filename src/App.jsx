import { useState } from 'react'
import logog from "/logog.png"


import './App.scss'

import Navbar from './components/Navbar'

function App() {

  return (
    <div>
     <Navbar/>
     <main>
      <div className='logog__img'>
      <img src={logog} alt="SilviaVet" />
      </div>
     </main>
    </div>
  )
}

export default App
