import { useState } from 'react'
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import TextoProyectos from './components/vpTexto/TextoProyectos';
import PilaresInicio from './components/pilaresInicio/PilaresInicio';
import Footer from './components/Footer/Footer'
import ContactoBreve from './components/ContactoBreve/ContactoBreve';
function App() {
  

  return (
      <>
        <Navbar />
        <Hero />
        <TextoProyectos />
        <PilaresInicio />
        <ContactoBreve />
        <Footer />
    </>
  )
}

export default App
