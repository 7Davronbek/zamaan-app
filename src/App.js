import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import LetsTalk from './components/LetsTalk'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import Projects from './components/Projects'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Services/>
      <Projects/>
      <Partners/>
      <LetsTalk/>
      <Footer/>
    </>
  )
}

export default App