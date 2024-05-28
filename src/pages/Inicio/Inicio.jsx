import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ContactoBreve from '../../components/ContactoBreve/ContactoBreve';
import Footer from '../../components/Footer/Footer'
import logoUrbanica from '../../assets/logoUrbanica.png';
import {Box, Grid} from '@material-ui/core'
import styles from './Inicio.module.css'
import PilarArquitectura from '../../assets/images/inicio/CARARQ.jpg'
import PilarUrbanismo from '../../assets/images/inicio/CARURB.jpg'
import PilarPaisajismo from '../../assets/images/inicio/CARIAPAI.jpg'
import imagenBoceto  from '../../assets/images/inicio/UrbanicaCroquisVilladelSolUruguay.jpg'


const Hero = ()=> {


    return (
        <>
        <Navbar />
        <div className={styles.heroContainer}>
            <div className={styles.hero}>
                <img src={logoUrbanica} className={styles.imagenHero} />
            </div>
        </div>

        
        
        {/* SECCION PROYECTO INTEGRALES */}

        <div className={styles.dvproyectos} >
            <div className={styles.dvHeading1}>
                <h1 id={styles.heading1}>PROYECTOS INTEGRALES</h1>
            </div>

            <div className={styles.dvHeading4}>
                <h4 id={styles.heading4}>Enfocados en mejorar las condiciones de vida en la ciudad,
                    buscando la armonía entre lo construido y lo natural
                    para lograr el confort en la vida urbana.
                </h4>
            </div>
            <div className={styles.lineaBottom} >
                <div className={styles.lineaLeft}>
                    <div className={styles.centrar}>
                    <p>Creamos espacios funcionales, que inspiran, y potencian la experiencia de la arquitectura. Estamos comprometidos con satisfacer a nuestros clientes aportando valor a la propuesta, presentes en todas las etapas del desarrollo. Nos define el trabajo en equipo, y es nuestra más valiosa herramienta para superar las expectativas a través de la calidad en el diseño y el cuidado del detalle en múltiples escalas.</p>
                    </div>
                    <div className={styles.derecha} >
                        <img src={imagenBoceto} id={styles.imgDerecha} alt='UrbanicaVilladelSolUruguay' />
                    </div>
                    <div className={styles.derecha} >
                        <p>Nuestro estudio cuenta con amplia capacidad de adaptación, desarrollándose en múltiples categorías: urbanizaciones, usos mixtos, arquitectura residencial, comercial, interiorismo y paisajismo. Brindamos soluciones arquitectónicas creativas, efectivas y rentables. Nuestra prioridad es entregar un servicio profesional de calidad en beneficio de los objetivos de nuestros clientes.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* PILARES */}

        <div className={styles.dvPilares} >

            <h1>
                Tres disciplinas como nuestros pilares.
            </h1>
            <div className={styles.dvTextoDisciplinas}>
                <h3>Arquitectura, urbanismo y paisaje se entrelazan para dar forma a entornos urbanos funcionales
                    y estéticamente agradables para mejorar las condiciones de vida de sus habitantes.
                </h3>
            </div>

            <Grid container className={styles.gridContainer} >
                <Grid item xs={12} sm={4}>

                    <Box className={styles.boxPilar}>
                        <h3>ARQUITECTURA</h3>
                        <img id={styles.imgPilarArq} src={PilarArquitectura} alt='Pilar Arquitectura Urbanica Uruguay' />
                    </Box>

                </Grid>
                <Grid item xs={12} sm={4}>

                    <Box className={styles.boxPilar}>
                        <h3>URBANISMO</h3>
                        <img id={styles.imgPilarUrb} src={PilarUrbanismo} alt='Pilar Urbanismo Urbanica Uruguay' />
                    </Box>
                    
                </Grid>
                <Grid item xs={12} sm={4}>

                    <Box className={styles.boxPilar}>
                        <h3>PAISAJISMO</h3>
                        <img id={styles.imgPilarPai} src={PilarPaisajismo} alt='Pilar Paisajismo Urbanica Uruguay' />
                    </Box>

                </Grid>
            </Grid>
        </div>



        <ContactoBreve />
        <Footer />
        </>
        
    )
}

export default Hero;