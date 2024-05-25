import { React, useState} from 'react';
import NavBar from '../../components/navbar/Navbar'
import { FormControl } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import './Contacto.css'
import Button from '@mui/material/Button';
import {Box, Grid} from '@material-ui/core'



const Contacto = () =>{

    
const [texto, setTexto] = useState('');

const handleClick = ()=>{
    if(texto.trim() === ''){
        alert('El email está vacío');
    }
}

const handleChange = (event) =>{
    setTexto(event.target.value);
}


    return(
        <>
        <NavBar />

        <div className='dvSeccionContacto'>
            <h1>CONTACTO</h1>
        </div>
        
        <div className="row input-container">
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input type="text" required />
					<label>Nombre</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required onChange={handleChange} />
					<label>Email</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input" style={{float:'right'}}>
					<input type="text" required />
					<label>Teléfono</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea required></textarea>
					<label>Mensaje</label>
				</div>
			</div>
			<div className="col-xs-12">
                <Button id='btnEnviar' variant="contained" onClick={handleClick}>ENVIAR</Button>
			</div>
	    </div>
        <div className='dvPrincipalesContactos'>
        <Grid container className='gridContainerContactos'>
            <Grid item xs={2} >

                <Box className={'boxContacto'}>
                    <h3>Ma. Victoria Bidegain</h3>
                    <h4>mvbidegain@gmail.com</h4>
                </Box>

            </Grid>
            <Grid item xs={2} >

                <Box className={'boxContacto'}>
                    <h3>Sergio Maceira</h3>
                    <h4>sergiomaceira@gmail.com</h4>
                </Box>
                
            </Grid>
            <Grid item xs={2} >

                <Box className={'boxContacto'}>
                    <h3>Lorena Díaz</h3>
                    <h4>lorenadiazgrossy@gmail.com</h4>
                </Box>
                
            </Grid>
            <Grid item xs={2} >

                <Box className={'boxContacto'}>
                    <h3>Gimena Rojas</h3>
                    <h4>gimenarojas802@gmail.com</h4>
                </Box>

            </Grid>
        </Grid>       

        </div>
        </>
    )
}

export default Contacto;
