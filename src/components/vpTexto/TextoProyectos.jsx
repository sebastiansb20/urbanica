import React, {useState} from 'react';
import styles from './TextoProyectos.module.css'
import {Box, Grid, StylesProvider} from '@material-ui/core'

const TextoProyectos = () => {

    return(
        <>
        <div className={styles.dvproyectos} >
            <div className={styles.dvHeading1}>
                <h1 className={styles.heading1}>PROYECTOS INTEGRALES</h1>
            </div>
            <div className={styles.dvHeading4I}>
                <h4 className={styles.heading4}>Enfocados en mejorar las condiciones de vida en la ciudad,
                    buscando la armonía entre lo construido y lo natural
                    para lograr el confort en la vida urbana.
                </h4>
            </div>
            <div className={styles.centrar}>

                <Grid container className={styles.gridContainerInfo}>
                    <Grid item xs={12} sm={12} md={5}>

                        <Box className={styles.boxItemInfo}>
                            <p>Creamos espacios funcionales, que inspiran, y potencian la experiencia de la arquitectura. Estamos comprometidos con satisfacer a nuestros clientes aportando valor a la propuesta, presentes en todas las etapas del desarrollo. Nos define el trabajo en equipo, y es nuestra más valiosa herramienta para superar las expectativas a través de la calidad en el diseño y el cuidado del detalle en múltiples escalas.</p>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>

                        <Box className={styles.boxItemInfo}>
                            <p>Nuestro estudio cuenta con amplia capacidad de adaptación, desarrollándose en múltiples categorías: urbanizaciones, usos mixtos, arquitectura residencial, comercial, interiorismo y paisajismo. Brindamos soluciones arquitectónicas creativas, efectivas y rentables. Nuestra prioridad es entregar un servicio profesional de calidad en beneficio de los objetivos de nuestros clientes.</p>
                        </Box>
                        
                    </Grid>
                </Grid>

            </div>
            

        </div>
        </>
    )

}

export default TextoProyectos;
