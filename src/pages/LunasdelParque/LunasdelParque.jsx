import React from 'react';
import './LunasdelParque.css'
import {Grid, Box} from '@material-ui/core'
import NavBar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import  frenteLunas from '../../assets/images/lunasdelParque/frenteLunas.jpg'
import frenteLunas2  from '../../assets/images/lunasdelParque/frenteLunas2.jpg'
import esquinaLunas from '../../assets/images/lunasdelParque/esquinaLunas.jpg'
import contraFrenteLunas from '../../assets/images/lunasdelParque/contraFrenteLunas.jpg'

const LunasdelParque = () =>{

    return(
        <>
        <NavBar />
        <div className='dvHeroJacaranda'>

            <h1>LUNAS DEL PARQUE</h1>

            <img id='imgFrenteLunas' src={frenteLunas} alt='Lunas del Parque Urbanica Uruguay'/>

            <Grid container>

                <Grid item xs={12} sm={4} md={5}>
                    <Box>
                        <img id='imgEsquinaLunas' src={esquinaLunas} alt='Lunas del Parque Urbanica Uruguay'/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={5}>
                    <Box>
                        <p>Se trata de un proyecto diferente dentro de la trama urbana, con vistas al Parque Centenario, <br/>la tipología recrea el concepto de casa en altura.</p>
                    </Box>
                    <Box>
                        <p>Edificio Residencial "Lunas del Parque" Superficie: 3500 m2 Año: 2019</p>
                    </Box>
                </Grid>

            </Grid>
        </div>
        <div className='dvSeccionCentrado'>
            <img src={frenteLunas2} alt='Lunas del Parque Urbanica Uruguay' />
        </div>

        <Grid container>

                <Grid item xs={12} sm={4} md={5}>
                    <Box>
                    <p>Constituido por 28 apartamentos de 1, 2 y 3 dormitorios, con amplias terrazas, parrilleros y calefacción.  <br/>Cuenta con amenities de excelente calidad:</p>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={5}>
                    <Box>
                        <li>
                            <ul>
                                <a>Amplia recepción con zonas sociales.</a>
                            </ul>
                            <ul>
                                <a>Jardín parquizado.</a>
                            </ul>
                            <ul>
                                <a>Barbacoa</a>
                            </ul>
                            <ul>
                                <a>Piscina con solárium</a>
                            </ul>
                            <ul>
                                <a>Gimnasio</a>
                            </ul>
                            <ul>
                                <a>Cocheras individuales confortables</a>
                            </ul>
                            <ul>
                                <a>Estacionamientos de cortesía</a>
                            </ul>
                        </li>
                    </Box>
                </Grid>

            </Grid>
        <div className='dvSeccionCentrado'>
            <img src={contraFrenteLunas} alt='Lunas del Parque Urbanica Uruguay' />
        </div>

        <Footer />
        </>
    )
}

export default LunasdelParque;
