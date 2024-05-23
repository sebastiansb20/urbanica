import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Proyectos.css'
import Proyecto from '../../components/Proyecto/Proyecto';
import imgLunas from '../../assets/images/proyectos/LunasDelParqueUrbanicaUruguay.jpg'
import imgAraza from '../../assets/images/proyectos/ArazaUrbanicaUruguay.png'
import imgJacaranda from '../../assets/images/proyectos/ViaJacarandaUruguay.png'
import imgVilladelSol from '../../assets/images/proyectos/CroquisVilladelSolUruguay.jpg'
import imgMuseo from '../../assets/images/proyectos/MuseoSkyspaceUrbanicaUruguay.jpg'
import imgHotel from '../../assets/images/proyectos/HotelSkyspaceUrbanicaUruguay.jpeg';
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

            <Proyecto nombreProyecto='"Lunas del Parque"' detalleProyecto='EDIFICIO RESIDENCIAL' imgProyecto={imgLunas} pos={1} />
            <Proyecto nombreProyecto='"Arazá"' detalleProyecto='EDIFICIO RESIDENCIAL' imgProyecto={imgAraza} pos={0}/>

            <div className="dvheadingPr">
                <h2>URBANISMO</h2>
            </div>

            <Proyecto nombreProyecto='"Vía Jacarandá"' detalleProyecto='BARRIO PRIVADO' imgProyecto={imgJacaranda} pos={1}/>
            <Proyecto nombreProyecto='"Villa del Sol"' detalleProyecto='URBANIZACIÓN' imgProyecto={imgVilladelSol} pos={0}/>

            <div className="dvheadingPr">
                <h2>PAISAJISMO</h2>
            </div>

            <Proyecto nombreProyecto='"SKYSPACE TA KHUT BY JAMES TURRELL"' detalleProyecto='MUSEO' imgProyecto={imgMuseo} pos={1}/>
            <Proyecto nombreProyecto='"The Grand Hotel"' detalleProyecto='HOTEL' imgProyecto={imgHotel} pos={0}/>
        </>
    );


}
export default Proyectos;