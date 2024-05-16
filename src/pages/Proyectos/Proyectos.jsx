import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Proyectos.css'
import Proyecto from '../../components/Proyecto/Proyecto';
import imgLunas from '../../assets/images/proyectos/LunasDelParqueUrbanicaUruguay.jpg'

const Proyectos = () =>{
    
    return(
        <>
            <Navbar />
            <div className='dvHero'>

                <h1 id="h1HeroPr">Hemos recopilado una selección de proyectos que ilustran la amplitud de nuestra
                    experiencia y nuestro enfoque en resultados sobresalientes
                </h1>

            </div>

            <div className="dvheadingPr">
                <h2>ARQUITECTURA</h2>
            </div>

            <Proyecto nombreProyecto='"Lunas del Parque"' detalleProyecto='EDIFICIO RESIDENCIAL' imgProyecto={imgLunas} />
            <Proyecto nombreProyecto='"Arazá"' detalleProyecto='EDIFICIO RESIDENCIAL' imgProyecto={imgLunas}/>
        </>
    );


}
export default Proyectos;