import { useState } from 'react'
import logog from "/logog.png"
import Footer from './components/Footer';
import About from './components/About'
import './App.scss'
import Navbar from './components/Navbar'
import Services from './components/Services';


function App() {

  return (
    <div>
     <Navbar/>
     <div className="nav-spacer" />
     <main>
      <div className='logog__img'>
      <img src={logog} alt="SilviaVet" />
      </div>
        <About/>
      
      <Services/>
     </main>
     <Footer />
    </div>
  )
}

export default App
