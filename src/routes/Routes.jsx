import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from '../pages/Inicio/Inicio'
import Proyectos from '../pages/Proyectos/Proyectos'
import Equipo from '../pages/Equipo/Equipo'
import Contacto from '../pages/Contacto/Contacto'
import ViaJacaranda from '../pages/ViaJacaranda/ViaJacaranda'
import LunasdelParque from '../pages/LunasdelParque/LunasdelParque'

function RoutesS() {
    return (
      <Router>
        <Routes>
          <Route exact path="" element={<Inicio />} />
          <Route exact path="/inicio" element={<Inicio />} />
          <Route exact path="/proyectos" element={<Proyectos />} />
          <Route exact path="/equipo" element={<Equipo />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/via-jacaranda" element={<ViaJacaranda />} />
          <Route exact path="/lunasdelparque" element={<LunasdelParque />} />
        </Routes>
      </Router>
    );
  }
  
  export default RoutesS;
  