import React from 'react';
import {Box, Grid} from '@material-ui/core'
import styles from './PilaresInicio.module.css'
import PilarArquitectura from '../../assets/images/inicio/CARARQ.jpg'
import PilarUrbanismo from '../../assets/images/inicio/CARURB.jpg'
import PilarPaisajismo from '../../assets/images/inicio/CARIAPAI.jpg'

const PilaresInicio = () =>{

    return(
        <>
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
        </>
    )
}

export default PilaresInicio;