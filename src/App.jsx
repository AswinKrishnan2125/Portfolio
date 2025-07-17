import { useState } from 'react'

import './App.css'
import './assets/Navbar/Navbar.jsx'
import Navbar from './assets/Navbar/Navbar.jsx'
import HeroSection from './assets/Hero/HeroSection.jsx'
import AboutSection from './assets/AboutSection/AboutSection.jsx'
import ProjectSection from './assets/Projects/ProjectSection.jsx'
import Footer from './assets/Footer/Footer.jsx'

function App() {
 

  return (
    <div className='App-main'>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <Footer/>
    </div>
  )
}

export default App
