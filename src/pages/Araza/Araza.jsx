import {React, useEffect} from 'react';
import './Araza.css'
import Navbar from '../../components/navbar/Navbar'
import logoAraza from '../../assets/images/araza/logoAraza.png'
import arazaFrente from '../../assets/images/araza/arazaFrenteHero.png'
import arazaFruto from '../../assets/images/araza/arazaFruto.png'
import ubicacionAraza from '../../assets/images/araza/arazaUbicacion.png'

const Araza = () =>{

    // const ScrollControlledMargin = () => {
    //     const [marginTop, setMarginTop] = useState(20); // Estado inicial del margen superior
      
    //     useEffect(() => {
    //       const handleScroll = () => {
    //         // Calcula el margen superior basado en la posición de desplazamiento
    //         const newMarginTop = Math.max(20 - window.scrollY, 0);
    //         setMarginTop(newMarginTop);
    //       };
      
    //       // Agrega el evento de escucha del desplazamiento al montar el componente
    //       window.addEventListener('scroll', handleScroll);
      
    //       // Elimina el evento de escucha del desplazamiento al desmontar el componente
    //       return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //       };
    //     }, []); // El efecto se ejecuta solo una vez al montar el componente
      
    //     return (
    //       <div className="sticky-element" style={{ marginTop: $concat{marginTop},px" }}>
    //         Soy un elemento pegajoso
    //       </div>
    //     );
    //   };

    return(
        <>
        <Navbar />
        <div className="container">
            <div className="dvLogoAraza">
              <img id='imgLogoAraza' src={logoAraza} style={{margin:'0 auto'}}alt='ArazaUrbanicaUruguay' />  
              <h1 style={{display:'none'}}>Araza</h1>
            </div>
            
            <div className="dvSeccionHeroAraza">
                    <img id='imgFrenteAraza'src={arazaFrente} alt='ArazaUrbanicaUruguay' />
            </div>
            
            <div className="dvImagenTexto">
                <h2>UNA NUEVA FORMA DE VIVIR EN LA CIUDAD</h2>
            </div>

            <div className="dvSeccionTextoDerecha">
                <h2 className='headingVegetal hVDerecha'>ARQUITECTURA + PAISAJE: EL VEGETAL <br/><span className='spanParteF'>COMO PARTE FUNDAMENTAL </span><br/>DEL DISEÑO ARQUITECTÓNICO</h2>
                <p>Un edificio que se convierte en un espacio vivo, con una cuidadosa selección del vegetal que procura recuperar biodiversidad y generar identidad local.
                    Un pequeño aporte a la ecología urbana que generará impactos positivos en la ciudad y a quienes lo habiten.</p>
            </div>
            <div className="dvSeccionTextoIzquierda">
                <h2 className='headingVegetal hVIzquierda'>ARAZÁ ES UN ESPACIO DONDE LA ARQUITECTURA Y LA NATURALEZA CONVIVEN</h2>
                <p>En la ciudad la presencia del vegetal se ve reducida a pocos espacios: plazas, canteros centrales de avenidas, 
                    algunos jardines particulares, perdiendo cada vez más el contacto con los ritmos naturales y los beneficios que aporta la naturaleza.</p>
            </div>
            
            <div className="dvSeccionFruto">
                <img src={arazaFruto} alt='ArazaUrbanicaUruguay' />
                <h2>Arazá incorpora la vegetación al diseño arquitectónico como un componente más del mismo.</h2>
            </div>
            <div className="dvSeccionUbicacion">
                <h2>San José de Mayo, Uruguay</h2>
                <p>Se encuentra ubicado estratégicamente en el corazón de la ciudad, sobre calle Vidal, en un entorno tranquilo y familiar.</p>
                <p>Lejos del ruido pero con rápido acceso a todos los servicios que ofrece el centro. A una cuadra de la renovada Avda. Luis Alberto de Herrera, que se transformó en el principal eje comercial de la ciudad.
                    A pasos de todos los servicios públicos, peatonales, colegios y de las 4 principales plazas de San José de Mayo.
                </p>
                <img src={ubicacionAraza} alt='ArazaUrbanicaUruguay' />
            </div>
            <div className="dvSeccionInfo">
                <ul>
                    <li>- 14 UNIDADES</li>
                    <li>- 4 COCHERAS</li>
                    <li>- 1 BARBACOA</li>
                </ul>
                <h2> SETIEMBRE, 2024</h2>
            </div>
        </div>
            
        </>
    )
}

export default Araza;