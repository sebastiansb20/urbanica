import React, {useState} from 'react';
import styles from './ContactoBreve.module.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

const ContactoBreve = ({origen}) =>{

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
        <div className={origen === 1 ? (styles.dvContactoBreve + ' ' + styles.dvContactoBreveInicio) : styles.dvContactoBreve}>

            <h2>Comencemos a trabajar juntos</h2>

            <h5>Te contactaremos a la brevedad</h5>
            <div className={styles.dvTxtFieldEnviar}>
                <TextField id={styles.txtFieldEnviar} label="Email" variant="outlined" value={texto} onChange={handleChange} />
                <Button id={styles.btnEnviar} variant="contained" onClick={handleClick}>ENVIAR</Button>
            </div>
            

            

        </div>
        </>
    )
}

export default ContactoBreve