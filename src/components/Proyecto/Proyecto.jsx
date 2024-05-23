import React from 'react';
import { Grid, Box } from '@material-ui/core';
// import Button from '@mui/material/Button';
import './Proyecto.css'

const Proyecto = ({nombreProyecto, detalleProyecto, imgProyecto, pos}) =>{
    return(
        pos === 1 ? (
            <div className="dvSeccionProyecto">
                
                <div>
                    <Grid container>

                        <Grid item xs={12} sm={4} md={5}>
                            <Box>
                                <div className='dvTextoProyecto'>
                                    <h2>{nombreProyecto} </h2>
                                    <h4>{detalleProyecto} </h4>
                                    <button id="btnverproyecto" >VER PROYECTO</button>
                                </div>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={8} md={7}>
                            <Box>
                                <div className="dvImagenProyecto">
                                    <img src={imgProyecto} alt='LunasDelParqueUrbanicaUruguay' id="imgLunas" />
                                </div>
                            </Box>
                        </Grid>

                    </Grid>
                </div>
            </div>
            ) : (
                <div className="dvSeccionProyecto">
                    <div>
                        <Grid container>

                            <Grid item xs={12} sm={8} md={7}>
                                <Box>
                                    <div className="dvImagenProyecto">
                                        <img src={imgProyecto} alt='LunasDelParqueUrbanicaUruguay' id="imgLunas" />
                                    </div>
                                </Box>
                            </Grid>
                            
                            <Grid item xs={12} sm={4} md={5}>
                                <Box>
                                    <div className='dvTextoProyecto'>
                                        <h4>{nombreProyecto} </h4>
                                        <h2>{detalleProyecto} </h2>
                                        <button id="btnverproyecto">VER PROYECTO</button>
                                    </div>
                                </Box>
                            </Grid>

                            

                        </Grid>
                    </div>
                </div>
            )
            
    )
}

export default Proyecto;