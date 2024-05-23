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
                                        <button id="btnverproyecto">VER PROYECTO</button>
                                    </div>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={8} md={7}>
                            <Box>
                                <div className="dvImagenProyectoD">
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
                                    <div className="dvImagenProyectoI">
                                        <img src={imgProyecto} alt='LunasDelParqueUrbanicaUruguay' id="imgLunas" />
                                    </div>
                                </Box>
                            </Grid>
                            
                            <Grid item xs={12} sm={4} md={5}>
                                <Box>
                                    <div className='dvTextoProyecto'>
                                        <h2>{nombreProyecto} </h2>
                                        {/* <div className='dvDetalleProyecto'> */}
                                            <h4>{detalleProyecto} </h4>
                                        {/* </div> */}
                                        
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