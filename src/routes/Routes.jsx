import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from '../pages/Inicio'
import Proyectos from '../pages/Proyectos'

function RoutesS() {
    return (
      <Router>
        <Routes>
          <Route exact path="" element={<Inicio />} />
          <Route exact path="/inicio" element={<Inicio />} />
          <Route exact path="/proyectos" element={<Proyectos />} />
        </Routes>
      </Router>
    );
  }
  
  export default RoutesS;
  