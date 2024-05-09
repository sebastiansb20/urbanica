import { useState } from 'react'
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import TextoProyectos from './components/vpTexto/TextoProyectos';
import PilaresInicio from './components/pilaresInicio/PilaresInicio';
import Footer from './components/Footer/Footer'
function App() {
  

  return (
      <>
        <Navbar />
        <Hero />
        <TextoProyectos />
        <PilaresInicio />
        <Footer />
    </>
  )
}

export default App
