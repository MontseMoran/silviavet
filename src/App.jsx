import { useState } from 'react'
import logog from "/logog.png"


import './App.css'

import Navbar from './components/Navbar'

function App() {

  return (
    <div>
     <Navbar/>
     <main>
      <img src={logog} alt="SilviaVet" />
     </main>
    </div>
  )
}

export default App
