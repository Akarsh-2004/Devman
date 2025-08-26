import { useState } from 'react'
import './App.css'
import Body from './components/body/Body.jsx'

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Links from './components/links/Links.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Body />
      <Links />
      <Footer />
      
    </>
  )
}

export default App
