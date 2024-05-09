import React from 'react';
import {Grid,Box} from '@material-ui/core'
import styles from './Footer.module.css'
import logoUrbanica from '../../assets/images/page/logoUrbanicaFooter.png'
const Footer = () =>{

    return(
        <>
        <div className={styles.dvFooter}>

            <Grid container>

                <Grid item xs={12} sm={6} className={styles.gridLogoFooter}>
                    <Box>
                        <div className={styles.imgLogoBox}>
                            <img id={styles.logoUrbanica} src={logoUrbanica} alt='Logotipo Urbanica Uruguay' />
                        </div>
                        
                    </Box>
                </Grid>

                <Grid item xs={12} sm={3} className={styles.gridLinksFooter}>
                    <Box >
                        <ul>
                            <li>MENÚ</li>
                            <li>Inicio</li>
                            <li>Proyectos</li>
                            <li>Equipo</li>
                            <li>Contacto</li>
                        </ul>
                    </Box> 
                </Grid>
                <Grid item xs={12} sm={3} className={styles.gridLinksFooter}>
                    <Box>
                        <ul>
                            <li>SEGUINOS</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                        </ul>
                    </Box>
                </Grid>
            </Grid>

            <div className={styles.marcaFooter}>
                <h4>Urbánica - 2024</h4>
            </div>
        </div>
        </>
    )
}

export default Footer;