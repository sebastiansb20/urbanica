import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/Inicio/hero/Hero';
import TextoProyectos from '../components/Inicio/vpTexto/TextoProyectos';
import PilaresInicio from '../components/Inicio/pilaresInicio/PilaresInicio';
import ContactoBreve from '../components/Inicio/ContactoBreve/ContactoBreve';
import Footer from '../components/Footer/Footer'


function Inicio() {
  

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
  
  export default Inicio
  